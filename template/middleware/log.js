/**
 * Created by busyhe on 2018/7/10 上午10:00.
 * Email: 525118368@qq.com
 */
const chalk = require('chalk');
const dayjs = require('dayjs');

exports.responseTime = async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    ctx.set('X-Response-Time', ms + 'ms');
};

exports.logger = async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    const now = chalk.gray(`[ ${dayjs().format('YYYY-MM-DD HH:mm:ss')} ]`);
    const status = ctx.response.status;
    const statusColor = status === 200 ? chalk.green(` ${status} `) : chalk.red(` ${status} `);
    const time = chalk.yellow(`${ms}ms`);
    const other = chalk.green(`${ctx.method} ${ctx.url} - `);
    console.log(now + statusColor + other + time);
    if (ctx.url.indexOf('api') >= 0) {
        console.log(chalk.gray('--------------------------'));
        if (ctx.method === 'GET') {
            console.log(chalk.green(`  req: `), ctx.request.query);
        } else if (ctx.method === 'POST') {
            console.log(chalk.green(`  req: `), ctx.request.body);
        }
        console.log(chalk.green(`  res: `), ctx.response.body);
        console.log(chalk.gray('--------------------------'));
    }
};
