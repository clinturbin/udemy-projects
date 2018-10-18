import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '1px solid blue'
    }
    return (
        <input 
            type='text'
            style={style}
            onChange={props.changed}
            value={props.value}
        />
    )
};

export default UserInput;