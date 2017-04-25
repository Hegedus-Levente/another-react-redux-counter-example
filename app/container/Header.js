import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  static propTypes = {
    progress: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render () {
    return (
      <header>
        <h1>Progress</h1>
        <div className='progress'>
          <div style={{width: this.props.progress + '%'}}></div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress.progressPercentage
});

export default connect(mapStateToProps)(Header);
