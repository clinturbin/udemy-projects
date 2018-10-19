import React from 'react';

const person = (props) => 
    
    <div>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} year's old!</p>
        <p>{props.children}</p>
    </div>

export default person;