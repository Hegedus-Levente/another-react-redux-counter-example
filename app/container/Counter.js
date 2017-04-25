import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from 'redux-modules/redux';

class Counter extends Component {
  static propTypes = {
    progress: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  render () {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+</button>
        <label>{this.props.progress}</label>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress
});

export default connect(mapStateToProps)(Counter);