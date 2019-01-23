import { UPDATE_TIMER } from './../constants/action-types';

const timerReducer = (state = { timer: 0 }, action) => {
  if (action.type === UPDATE_TIMER) {
    const { timer } = action.payload;
    return { ...state, timer };
  }
  return state;
};
