/**
 * Created by busyhe on 2018/12/11 3:44 PM.
 * Email: 525118368@qq.com
 */
const axios = require('../common/http');

/**
 * 测试获取wfe模板列表
 * @returns {Promise|*|PromiseLike<T | never>|Promise<T | never>}
 */
exports.getTemplates = () => {
    return axios.get('https://api.github.com/users/wfe-templates/repos').then(res => res.data)
};
