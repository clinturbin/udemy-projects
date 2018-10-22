import React, { Component } from 'react';
import Radium from 'radium';
// npm install --save radium
// radium is a popular package for react that allows us to use inline styles with pseudo selectors and media queries
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'fasf4', name: 'Max', age: '28'},
      {id: 'hfghf4', name: 'Michael', age: '29'},
      {id: 'fghft5', name: 'Isobel', age: '30'},
    ]

  }

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(person => person.id === id);
    let person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  };

  toggelPersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } 
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person 
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />    
          )}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    };

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');  // classes = ['red', 'bold']
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.toggelPersonsHandler}>Switch Name</button>
        {persons}
      </div>
    )
  }
}

export default Radium(App);
