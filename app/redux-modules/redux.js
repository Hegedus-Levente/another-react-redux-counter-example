import { createStore, applyMiddleware, compose } from 'redux'

import { combineReducers } from 'redux';
import {progressActionsHandler} from './progress';
import {counterActionsHandler} from './counter';

const reducers = combineReducers({
  counter: counterActionsHandler,
  progress: progressActionsHandler
});

const entireStateMiddleware = ({ getState }) => next => action => next({...action, getEntireState: getState});

export const store = createStore(
  reducers,
  compose(applyMiddleware(entireStateMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
