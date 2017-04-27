import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header';
import {increment, decrement} from 'redux-modules/counter';
import {requestRandomTargetValue} from 'redux-modules/target';

class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    targetValue: PropTypes.number.isRequired,
    isRandomValueLoading: PropTypes.bool.isRequired,
    requestRandomTargetValue: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render () {
    const {increment, decrement, count, targetValue, requestRandomTargetValue, isRandomValueLoading} = this.props;
    return (
      <div>
        <Header
          count={count}
          targetValue={targetValue}
          isLoading={isRandomValueLoading}
        />
        <div className='counter'>
          <button onClick={increment}>+</button>
          <label>{this.props.count}</label>
          <button onClick={decrement}>-</button>
        </div>
        <div className='random'>
          <button
            disabled={isRandomValueLoading}
            onClick={requestRandomTargetValue}>
            Set Random Target Value
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  targetValue: state.target.targetValue,
  isRandomValueLoading: state.target.isLoading
});

const mapDispatchToProps = dispatch => ({
  requestRandomTargetValue: () => dispatch(requestRandomTargetValue()),
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);