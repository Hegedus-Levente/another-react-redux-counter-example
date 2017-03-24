import React, { Component } from 'react';

import Welcome from 'components/Welcome';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: 'default'
    };
  }

  onKeyUp (event) {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Welcome name={this.state.name} />
        <label>Enter name</label>
        <input type='text' onKeyUp={this.onKeyUp.bind(this)}/>
      </div>
    );
  }
}

export default App;
