import {
  TOGGLE_MESSAGES,
  UPDATE_USER_INFO,
  UPDATE_NAV_CLASS,
  UPDATE_TIMER,
  UPDATE_UID
} from '../constants/action-types';
import { getUserInfo } from '../../services/userService';

/*---------------------toggleMessages------------------------*/

export const toggleMessages = ownProps => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_MESSAGES,
    payload: {
      showMessages: getState().adviceReducer.showMessages
    }
  });
  return dispatch(updateUserInfo(ownProps));
};

/*---------------------updateUserInfo------------------------*/

export const updateUserInfo = ownProps => async (dispatch, getState) => {
  const uid = ownProps.uid ? ownProps.uid : ownProps.match.params.id;
  const userInfo = await getUserInfo(uid);

  dispatch({
    type: UPDATE_USER_INFO,
    payload: { ...userInfo }
  });
};

/*---------------------updateNavClass------------------------*/

export const updateNavClass = () => (dispatch, getState) => {
  let { lastScrollTop = 0 } = getState().navReducer;
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

/*---------------------updateTimer------------------------*/
export const updateTimer = () => {
  return { type: UPDATE_TIMER, payload: {} };
};
/*---------------------updateUID------------------------*/

export const updateUID = uid => {
  return { type: UPDATE_UID, payload: { uid } };
};
