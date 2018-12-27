/**
 * Created by busyhe on 2018/1/27 上午1:49.
 * Email: 525118368@qq.com
 * 网络状态0成功，1错误，2警告，3未登录
 */
const status = {
    success(ctx, data) {
        let successData = {
            status: 0
        };
        if (!data) {
            ctx.body = successData
        } else {
            ctx.body = Object.assign({}, successData, data)
        }
    },
    error(ctx, msg) {
        ctx.body = {
            status: 1,
            message: msg || '服务出错'
        }
    },
    noLogin(ctx) {
        ctx.body = {
            status: 2,
            message: '未登录'
        }
    }
};

module.exports = status;
