import { TOGGLE_MESSAGES } from '../constants/action-types';
import { UPDATE_NAV_CLASS } from '../constants/action-types';
import store from '../store/index';

export function toggleMessages(payload) {
  return { type: TOGGLE_MESSAGES, payload };
}

export const updateNavClass = () => (dispatch, getState) => {
  let { lastScrollTop = 0 } = getState();
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let newNavBarClass = '';
  if (st > lastScrollTop) {
    newNavBarClass = 'navbar-hidden';
  }
  lastScrollTop = st <= 0 ? 0 : st;

  dispatch({
    type: UPDATE_NAV_CLASS,
    payload: { navBarClass: newNavBarClass, lastScrollTop }
  });
};
