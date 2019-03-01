import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <button onClick={this.incrementCount}>I was clicked {this.state.count} times(s)</button>
    );
  }
}

export default App;
