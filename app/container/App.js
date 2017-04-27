import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from 'container/Counter';
import { store } from 'redux-modules/redux';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;
