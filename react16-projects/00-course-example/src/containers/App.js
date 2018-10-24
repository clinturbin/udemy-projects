import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        {id: 'fasf4', name: 'Max', age: '28'},
        {id: 'hfghf4', name: 'Michael', age: '29'},
        {id: 'fghft5', name: 'Isobel', age: '30'},
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log(`[App.js] inside componentWillMount`);
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate',  nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate')
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  };

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {
    console.log('[App.js] inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}  
          />;    
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({showPersons: true})
          }}
        >Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggelPersonsHandler}
        />
        {persons}
      </Aux>
    )
  }
}

export default withClass(App, 'App');
