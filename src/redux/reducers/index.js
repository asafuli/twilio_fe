import { TOGGLE_MESSAGES } from '../constants/action-types';

const initialState = {
  advice: '',
  user: '',
  resource: '',
  message: [],
  showMessages: false,
  secondsToFlight: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE_MESSAGES) {
    return { ...state, showMessages: !action.payload };
  }
  return state;
}

export default rootReducer;
