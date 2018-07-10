/**
 * Created by busyhe on 2018/7/10 上午10:11.
 * Email: 525118368@qq.com
 */
module.exports =  async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = {
            message: err.message
        };
    }
};
