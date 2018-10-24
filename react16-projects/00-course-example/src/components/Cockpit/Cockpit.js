import React from 'react';
import './Cockpit.css';
import Aux from '../../hoc/Aux';

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
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Switch Name</button>
        </Aux>
        // <div className='Cockpit'>
            // <h1>{props.appTitle}</h1>
            // <p className={classes.join(' ')}>This is really working</p>
            // <button
            //     className={btnClass}
            //     onClick={props.clicked}
            // >Switch Name</button>
        // </div>
    )
};

export default cockpit;