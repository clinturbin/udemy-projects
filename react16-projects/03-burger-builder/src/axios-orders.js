import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-8b5b4.firebaseio.com/'
});

export default instance;