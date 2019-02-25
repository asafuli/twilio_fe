import { TOGGLE_USER_LOGIN } from '../constants/action-types';

const initialState = {
  loggedIn: false
};

function loginReducer(state = initialState, action) {
  if (action.type === TOGGLE_USER_LOGIN) {
    const { loggedIn } = action.payload;
    return {
      ...state,
      loggedIn: !loggedIn
    };
  }
  return state;
}

export default loginReducer;
