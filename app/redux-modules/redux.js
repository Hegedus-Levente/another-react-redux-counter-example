import { createStore } from 'redux'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators

export const increment = (toAdd = 1) => ({
  type: INCREMENT,
  payload: toAdd
});

export const decrement = (toRemove = 1) => ({
  type: DECREMENT,
  payload: toRemove
});

const initialState = {
  progress: 0
};

const reducer = (state = initialState, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case INCREMENT:
      return {...state, progress: state.progress + action.payload};
    case DECREMENT:
      return {...state, progress: state.progress > 0 ? state.progress - action.payload : 0};
  }

  return state;
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());