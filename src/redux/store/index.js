import { createStore, applyMiddleware } from 'redux';
import { hideNavOnScrollMW } from '../middleware';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(hideNavOnScrollMW));

export default store;
