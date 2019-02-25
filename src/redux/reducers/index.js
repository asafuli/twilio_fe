import navReducer from './navReducer';
import adviceReducer from './adviceReducer';
import userReducer from './userReducer';
import UIDReducer from './UIDReducer';
import timerReducer from './timerReducer';
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  navReducer,
  adviceReducer,
  userReducer,
  UIDReducer,
  timerReducer,
  loginReducer
});

export default rootReducer;
