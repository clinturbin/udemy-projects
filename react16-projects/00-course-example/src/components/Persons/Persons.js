import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log(`[Persons.js] inside componentWillMount`);
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps',  nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate',  nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || 
    //            nextProps.changed !== this.props.changed ||
    //            nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate',  nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate')
    }

    render () {
        console.log(`[Persons.js] inside render()`);
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            )
        });
    }
};   

export default Persons;