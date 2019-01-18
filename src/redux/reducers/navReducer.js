import { UPDATE_NAV_CLASS } from '../constants/action-types';

const initialState = {
  navBarClass: '',
  lastScrollTop: 0
};

function navReducer(state = initialState, action) {
  if (action.type === UPDATE_NAV_CLASS) {
    return { ...state, ...action.payload };
  }
  return state;
}

export default navReducer;
