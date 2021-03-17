import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const makeStore = () =>
  createStore(rootReducer, applyMiddleware(...middlewares));

export const wrapper = createWrapper(makeStore, { debug: true });
