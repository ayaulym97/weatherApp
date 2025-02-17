import axios from 'axios';
import {baseUrl} from '@/config/app';

const api = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default api;
