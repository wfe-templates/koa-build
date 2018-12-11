/**
 * Created by busyhe on 2018/7/9 下午4:29.
 * Email: 525118368@qq.com
 */
const homeServer = require('../services/main');

exports.index = async (ctx) => {
    const result = await homeServer.getTemplates();
    return ctx.body = {
        status: 0,
        result
    }
};
