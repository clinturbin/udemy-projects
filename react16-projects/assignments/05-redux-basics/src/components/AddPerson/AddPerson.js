import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => this.setState({name: event.target.value});
    ageChangedHandler = (event) => this.setState({age: event.target.value});

    render() {
        return (
            <div className="AddPerson">
                <input 
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.nameChangedHandler}
                />
                <input 
                    type='text'
                    placeholder='Age'
                    value={this.state.age}
                    onChange={this.ageChangedHandler}
                />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    };
};

export default AddPerson;