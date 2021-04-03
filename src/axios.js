import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://book-system-1ca8d-default-rtdb.firebaseio.com',
});

export default instance;