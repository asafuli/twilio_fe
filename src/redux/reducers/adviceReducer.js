import { TOGGLE_MESSAGES } from '../constants/action-types';

const initialState = {
  showMessages: false
};

function adviceReducer(state = initialState, action) {
  if (action.type === TOGGLE_MESSAGES) {
    const { showMessages } = action.payload;
    return {
      ...state,
      showMessages: !showMessages
    };
  }
  return state;
}

export default adviceReducer;
