import {handleActions} from 'redux-actions';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = (toAdd = 1) => ({
  type: INCREMENT,
  payload: toAdd
});

export const decrement = (toRemove = 1) => ({
  type: DECREMENT,
  payload: toRemove
});

export const types = {
  INCREMENT, DECREMENT
};

export const counterActionsHandler = handleActions({
  [INCREMENT]: (state, action) => ({...state, count: state.count + action.payload}),
  [DECREMENT]: (state, action) => ({...state, count: state.count > 0 ? state.count - action.payload : 0})
}, {count: 0});
