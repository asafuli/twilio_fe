import {
  TOGGLE_MESSAGES,
  UPDATE_USER_INFO,
  UPDATE_NAV_CLASS
} from '../constants/action-types';
import { getUserInfo } from '../../services/userService';

export const toggleMessages = ownProps => async (dispatch, getState) => {
  const uid = ownProps.uid ? ownProps.uid : ownProps.match.params.id;
  console.log('toggle messages - uid :', uid);
  const userInfo = await getUserInfo(uid);
  // this.setState({ ...userInfo });
  // this.props.toggleMessages(this.props.showMessages);

  dispatch({
    type: TOGGLE_MESSAGES,
    payload: {
      showMessages: getState().adviceReducer.showMessages,
      ...userInfo
    }
  });
};

export const updateUserInfo = ownProps => async (dispatch, getState) => {
  const uid = ownProps.uid ? ownProps.uid : ownProps.match.params.id;
  console.log('update user info  - uid :', uid);
  const userInfo = await getUserInfo(uid);

  dispatch({
    type: UPDATE_USER_INFO,
    payload: { ...userInfo }
  });
};

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
