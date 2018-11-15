import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// You don't really need to do this because it is the default with axios


axios.interceptors.request.use(request => {
    console.log(request);
    // You can edit request config file before returning it (like adding headers)
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // You can edit response config file before returning it (like adding headers)
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Removing Interceptors
// You learned how to add an interceptor, getting rid of one is also easy. 
// Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, 
// to remove it (more info: https://github.com/axios/axios#interceptors):

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();