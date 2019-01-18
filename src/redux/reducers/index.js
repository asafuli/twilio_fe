import navReducer from './navReducer';
import adviceReducer from './adviceReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ navReducer, adviceReducer });

export default rootReducer;
