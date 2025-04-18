import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // o https://api.tuodominio.it/api
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

export default api;