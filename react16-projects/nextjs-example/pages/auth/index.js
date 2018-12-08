import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name='C-Bot' age={37} />
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "Super App (Auth)"});
        },1000);
    });
    return promise;
};

export default authIndexPage;