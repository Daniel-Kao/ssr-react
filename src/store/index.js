import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
  home: homeReducer
});
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
export const getClientStore = () => {
  return createStore(reducer, applyMiddleware);
};
