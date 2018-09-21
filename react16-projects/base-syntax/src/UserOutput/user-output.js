import React from 'react';
import './user-output.css';

const UserOutput = (props) => 
    <div className='UserOutput'>
        <p>UserName: {props.userName}</p>
        <p>This is paragraph 2.</p>
    </div>

export default UserOutput;