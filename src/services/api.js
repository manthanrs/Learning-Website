import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-url/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;