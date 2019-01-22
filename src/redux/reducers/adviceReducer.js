import { TOGGLE_MESSAGES } from '../constants/action-types';

const initialState = {
  advice: '',
  user: '',
  resource: '',
  message: [],
  showMessages: false,
  secondsToFlight: 0
};

function adviceReducer(state = initialState, action) {
  if (action.type === TOGGLE_MESSAGES) {
    const { showMessages, advice, user, resource, message } = action.payload;
    return {
      ...state,
      showMessages: !showMessages,
      advice,
      user,
      resource,
      message
    };
  }
  return state;
}

export default adviceReducer;
