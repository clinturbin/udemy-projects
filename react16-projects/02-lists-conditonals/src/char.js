import React from 'react';
import './char.css';

let Char = (props) => {
    return (
        <div className='Char' onClick={props.clicked}>
            {props.character}
        </div>
    )
};

export default Char;