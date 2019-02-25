import {
  TOGGLE_MESSAGES,
  UPDATE_USER_INFO,
  UPDATE_NAV_CLASS,
  UPDATE_TIMER,
  UPDATE_UID,
  TOGGLE_USER_LOGIN
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
export const updateTimer = timer => {
  return { type: UPDATE_TIMER, payload: { timer } };
};
/*---------------------updateUID------------------------*/

export const updateUID = uid => {
  return { type: UPDATE_UID, payload: { uid } };
};

export const toggleUserLogin = () => (dispatch, getState) => {
  console.log('TOGGLE USER LOGIN ACTION CALLED');
  dispatch({
    type: TOGGLE_USER_LOGIN,
    payload: {
      loggedIn: getState().loginReducer.loggedIn
    }
  });
};
