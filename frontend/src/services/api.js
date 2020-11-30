import axios from 'axios';
import getToken from '../utils/getToken';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
        'Acess-Control-Allow-Origin': '*',
    },
});
api.interceptors.request.use(
    (config) => {
        if (getToken() != null) {
            config.headers.Authorization = `Bearer ${getToken()}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
