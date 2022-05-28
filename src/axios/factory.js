import axios from "axios";

const baseURL = '/api/cloudbox/';
// const baseURL = '/local_api/cloudbox/';
export default baseURL;
export const timeout = 5000;

const instance = axios.create({
    baseURL,
    timeout
});

export const request = config => {
    return instance(config);
};
export const toPage500  = _this => _this.$router.push("/page500");
export const toPage404  = _this => _this.$router.push("/page404");

//请求拦截器
instance.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers = {
            token:localStorage.getItem('token')
        };
    }
    return config;
}, error =>  Promise.reject(error));


// 添加响应拦截器
instance.interceptors.response.use(response => {
    const status = response.status;
    return status && status === 200 ? response.data : response;
}, error =>  Promise.reject(error));

