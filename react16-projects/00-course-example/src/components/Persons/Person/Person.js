import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log(`[Person.js] inside componentWillMount`);
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        // this.focusInput();
    }

    focus() {
        this.inputElement.current.focus();
        // if (this.props.position === 0) {
        //     this.inputElement.current.focus(); // this puts a focus on the first input element
        // }
    }

    render() {
        console.log('[Person.js] inside componentDidMount()');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year's old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
        )
    }
};

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, 'Person');