/**
 * Created by busyhe on 2018/7/10 上午10:00.
 * Email: 525118368@qq.com
 */
const dayjs = require('dayjs');
const Console = require('../common/console');

exports.responseTime = async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', ms + 'ms');
};

exports.logger = async (ctx, next) => {
    const start = new Date();
    Console.customList([
        ['gray', `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]`],
        ['magenta', `[ api ]`],
        ['green', ` ${ctx.method} ${ctx.url}`]
    ]);
    if (ctx.method === 'GET') {
        Console.customList([
            ['green', `api_req: `],
            ['gray', JSON.stringify(ctx.request.query)]
        ]);
    } else {
        Console.customList([
            ['green', `api_req: `],
            ['gray', JSON.stringify(ctx.request.body)]
        ]);
    }
    await next();
    const ms = new Date() - start;
    const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const status = ctx.response.status;
    Console.customList([
        ['gray', `[${now}]`],
        ['magenta', `[ api ]`],
        [status === 200 ? 'green' : 'red', status],
        ['green', ` ${ctx.method} ${ctx.url} - `],
        ['yellow', `${ms}ms`]
    ]);
    if (ctx.url.indexOf('api') >= 0) {
        Console.customList([
            ['green', `api_res: `],
            ['gray', JSON.stringify(ctx.response.body)]
        ]);
    }
};
