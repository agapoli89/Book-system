import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: 'AIzaSyClC2eUU2_QxtASujHZhSRRi1mWaUKH9Ow',
    }
});

export default instance;