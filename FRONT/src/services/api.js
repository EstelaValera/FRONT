import axios from 'axios';
import apiConfig from '../apiConfig';

const api = axios.create({
    baseURL: apiConfig.baseURL,
});

api.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        apikey: apiConfig.apiKey, 
    };
    return config;
});

export default api;
