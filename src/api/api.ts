import axios from 'axios';

export const baseUrl = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
