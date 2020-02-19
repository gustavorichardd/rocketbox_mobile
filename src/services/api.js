import axios from 'axios';

const api = axios.create({
    baseURL: 'https://semanaomnistack-seis-backend.herokuapp.com/'
});

export default api;
