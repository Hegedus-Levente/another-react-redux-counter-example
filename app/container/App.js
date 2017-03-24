import React, { Component } from 'react';

import Welcome from 'components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name='hardcoded' />
      </div>
    );
  }
}

export default App;
