import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2408a.firebaseio.com/'
});

export default instance;