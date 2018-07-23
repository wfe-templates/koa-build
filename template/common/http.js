/**
 * Created by busyhe on 2018/7/10 上午11:51.
 * Email: 525118368@qq.com
 * axios网络请求
 */
const axios = require('axios');
const Console = require('./console');
const dayjs = require('dayjs');

let start;
let end;

// axios.defaults.baseURL = '/api';
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// };
axios.defaults.timeout = 10000;

// 请求拦截
axios.interceptors.request.use(config => {
    start = new Date();
    return config
}, error => {
    Console.danger(error);
    return Promise.reject(error)
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    end = new Date() - start;
    const config = response.config;
    Console.customList(`gray@[ ${dayjs().format('YYYY-MM-DD HH:mm:ss')} ]@@magenta@ [ server ]@@${response.status === 200 ? 'green' : 'red'}@ ${response.status} ${config.method} ${config.url} @@yellow@ ${end}ms`)
    Console.default('--------------------------');
    Console.customList(`green@req: @@gray@${JSON.stringify(config.data)}`);
    Console.customList(`green@res: @@gray@${JSON.stringify(response.data)}`);
    Console.default('--------------------------');
    return response;
}, function (error) {
    Console.danger(error);
    return Promise.reject(error);
});


module.exports = axios;
