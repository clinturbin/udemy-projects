import React from 'react';

let Validation = (props) => {
    let message = props.inputLength > 10 
        ? 'Text Long Enough!' : 'Text Too Short';
    return <div>
        <p>{message}</p>
    </div>
};

export default Validation;