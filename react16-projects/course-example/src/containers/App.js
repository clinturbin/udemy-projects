import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

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
      toggleClicked: 0,
      authenticated: false
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
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // executed whenever props are updated
    // and gives you a chance of updating state along with them
    // often you don't want this, your state should rarely be coupled to your props
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps',  nextProps, prevState);
    return prevState;
  };

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
  };

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

  loginHandler = () => {
    this.setState({authenticated: true});
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
            // isAuthenticated={this.state.authenticated}
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
          login={this.loginHandler}
          clicked={this.toggelPersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>{
          persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

export default withClass(App, 'App');
