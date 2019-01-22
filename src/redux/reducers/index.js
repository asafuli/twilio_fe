import navReducer from './navReducer';
import adviceReducer from './adviceReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ navReducer, adviceReducer, userReducer });

export default rootReducer;
