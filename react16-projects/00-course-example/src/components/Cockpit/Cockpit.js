import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = 'green-button';
    if (props.showPersons) {
        btnClass = 'red-button';
    }

    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <=1) {
      classes.push('bold');
    }

    return (
        <div className='Cockpit'>
            <h1>Hi, I'm a React app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Switch Name</button>
        </div>
    )
};

export default cockpit;