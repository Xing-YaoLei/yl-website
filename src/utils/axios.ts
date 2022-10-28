import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// Request 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
});

// Response 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // do something
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default service;
