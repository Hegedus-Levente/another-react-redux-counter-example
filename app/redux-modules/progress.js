import {handleActions} from 'redux-actions';
import {types as counterActionTypes} from './counter';

const targetValue = 10;
const getPercentage = currentValue => {
  return currentValue / targetValue * 100;
};
const updatePercentage = (state, action) => ({
  ...state,
  progressPercentage: getPercentage(action.getEntireState().counter.count + action.payload)
});

export const progressActionsHandler = handleActions({
  [counterActionTypes.INCREMENT]: updatePercentage,
  [counterActionTypes.DECREMENT]: updatePercentage
}, {progressPercentage: 0});
