/**
 * Created by busyhe on 2018/7/10 上午11:51.
 * Email: 525118368@qq.com
 */
const axios = require('axios');
const qs = require('qs');

// axios.defaults.baseURL = '/api';
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// };
axios.defaults.timeout = 10000;

// 请求拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});


export default axios
