import { createStore, applyMiddleware } from 'redux';
import { hideNavOnScrollMW } from '../middleware/hideNavOnScrollMW';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(hideNavOnScrollMW));

export default store;
