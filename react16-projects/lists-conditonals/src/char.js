import React from 'react';
import './char.css';

let Char = (props) => {
    return (
        <div className='Char'>
            {props.character}
        </div>
    )
};

export default Char;