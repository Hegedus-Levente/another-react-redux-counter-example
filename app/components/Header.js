import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    targetValue: PropTypes.number.isRequired,
    isLoading: PropTypes.bool
  };

  render () {
    const {count, targetValue, isLoading} = this.props;
    const progressPercentage = count / targetValue * 100;
    return (
      <header>
        <h1>Progress</h1>
        <div className='progress'>
          <label>{count} / {targetValue}</label>
          <div
            className={isLoading ? 'is-loading' : undefined}
            style={{width: progressPercentage + '%'}}
          />
        </div>
      </header>
    );
  }
}
