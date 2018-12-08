import React from 'react';

import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The Main Auth Page</h1>
        <User name='C-Bot' age={37} />
    </div>
);

export default authIndexPage;