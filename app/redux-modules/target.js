import {handleActions} from 'redux-actions';

const SETRANDOMTARGETVALUE_START = 'SETRANDOMTARGETVALUE_REQUEST';
const SETRANDOMTARGETVALUE_SUCCESS = 'SETRANDOMTARGETVALUE_SUCCESS';

export const requestRandomTargetValueStart = () => ({
  type: SETRANDOMTARGETVALUE_START
});

export const requestRandomTargetValue = () => {
  return dispatch => {
    dispatch(requestRandomTargetValueStart());
    fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=plain&rnd=new')
      .then(response => response.text())
      .then(randomValue => {
        dispatch(requestRandomTargetValueSuccess(Number(randomValue)));
      });
  };
};

const requestRandomTargetValueSuccess = (randomValue) => ({
  type: SETRANDOMTARGETVALUE_SUCCESS,
  payload: randomValue
});

export const types = {
  SETRANDOMTARGETVALUE_START,
  SETRANDOMTARGETVALUE_SUCCESS
};

export const targetActionsHandler = handleActions({
  [SETRANDOMTARGETVALUE_START]: (state, action) => ({...state, isLoading: true}),
  [SETRANDOMTARGETVALUE_SUCCESS]: (state, action) => ({...state, isLoading: false, targetValue: action.payload})
}, {
  targetValue: 10,
  isLoading: false
});
