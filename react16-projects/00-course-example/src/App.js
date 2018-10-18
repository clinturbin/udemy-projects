import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,  `Hi I'm a React App`));
    return (
      <div className='App'>
        <h1>Hi, I'm a React app</h1>
        <p>This is really working</p>
        <Person name='Max' age='28'/>
        <Person name='Michael' age='29'>My hobbies: Racing</Person>
        <Person name='Isabel' age='30'/>
      </div>
    )
  }
}

export default App;
