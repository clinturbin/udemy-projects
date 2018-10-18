import React from 'react';

const person = (props) => 
    // <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
    // <p>I'm {props.name} and I'm {props.age} year's old!</p>
    <div>
        <p>I'm {props.name} and I'm {props.age} year's old!</p>
        <p>{props.children}</p>
    </div>

export default person;