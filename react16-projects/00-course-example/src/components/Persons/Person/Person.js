import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log(`[Person.js] inside componentWillMount`);
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] inside componentDidMount()');
        return (
            <div className='Person'>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year's old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
        // return [
        //     <p key='1' onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year's old!</p>,
        //     <p key='2'>{this.props.children}</p>,
        //     <input key='3' type='text' onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
};

export default Person;