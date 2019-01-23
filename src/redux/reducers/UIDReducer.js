import { UPDATE_UID } from './../constants/action-types';

const UIDReducer = (state = { uid: 0 }, action) => {
  if (action.type === UPDATE_UID) {
    const { uid } = action.payload;
    return { ...state, uid };
  }
  return state;
};

export default UIDReducer;
