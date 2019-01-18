import { TOGGLE_NAVBAR } from '../constants/action-types';
import { updateNavClass } from './../actions/index';

export const hideNavOnScrollMW = store => next => action => {
  if (action.type === TOGGLE_NAVBAR) {
    const { getState, dispatch } = store;
    let { lastScrollTop = 0 } = getState();
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let newNavBarClass = '';

    if (st > lastScrollTop) {
      newNavBarClass = 'navbar-hidden';
    }

    lastScrollTop = st <= 0 ? 0 : st;
    dispatch(updateNavClass({ navBarClass: newNavBarClass, lastScrollTop }));
  }
  return next(action);
};
