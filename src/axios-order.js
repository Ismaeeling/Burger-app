import axios from 'axios';

const instance = axios.create({
    baseURL:'https://ismaeeling-1496406052394.firebaseio.com/'
})

export default instance;