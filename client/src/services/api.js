import axios from 'axios';

const api = axios.create({
  baseURL: 'https://coolcare-services.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
