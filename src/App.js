import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }
  }
  render() {
    return (
      <div>
        <h1>Game of thrones</h1>
      </div>
    );
  }
}

export default App;