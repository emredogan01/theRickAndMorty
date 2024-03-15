import axios from 'axios';
import {BASE_URL} from './urls';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async config => {
    config.params = {
      ...config.params,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
