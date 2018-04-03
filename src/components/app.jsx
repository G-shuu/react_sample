import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  render() {
    return (
      <div>
      <Greeting name="Mary" />
      <Greeting name="Bob" />
      </div>
    );
  }
}

export default App;
