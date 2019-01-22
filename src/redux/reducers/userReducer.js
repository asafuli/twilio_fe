import { UPDATE_USER_INFO } from '../constants/action-types';

const initialState = {
  advice: '',
  user: '',
  resource: '',
  message: []
};

function adviceReducer(state = initialState, action) {
  if (action.type === UPDATE_USER_INFO) {
    const { advice, user, resource, message } = action.payload;
    return {
      ...state,
      advice,
      user,
      resource,
      message
    };
  }
  return state;
}

export default adviceReducer;
