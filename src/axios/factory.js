import axios from "axios";

const baseURL = '/api';
export const timeout = 5000;

const instance = axios.create({
    baseURL,
    timeout
});

export const request = config => instance(config);
export const toPage500  = () => this.$router.powerPush("/page500");
export const toPage404  = () => this.$router.powerPush("/page404");

//请求拦截器
instance.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token');
    }
    return config;
}, error =>  Promise.reject(error));


// 添加响应拦截器
instance.interceptors.response.use(response => {
    const status = response.status;
    return status && status === 200 ? response.data : response;
}, error =>  Promise.reject(error));

