import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import {targetActionsHandler} from './target';
import {counterActionsHandler} from './counter';

const reducers = combineReducers({
  counter: counterActionsHandler,
  target: targetActionsHandler
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
