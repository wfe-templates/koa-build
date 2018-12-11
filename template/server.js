/**
 * Created by busyhe on 2018/7/5 上午10:31.
 * Email: 525118368@qq.com
 */
const Koa = require('koa');
const bodyParser = require('koa-body');
const koaStatic = require('koa-static');
const compose = require('koa-compose');
const router = require('./routers/index');
const errorMiddleware = require('./middleware/error');
const logMiddleware = require('./middleware/log');
const path = require('path');
const Console = require('./common/console');
const app = new Koa();
const config = require('./config');

app.use(bodyParser({
    multipart: true,
    formLimit: '10mb',
    jsonLimit: '10mb',
    textLimit: '10mb'
}));

app.use(compose([
    errorMiddleware,
    logMiddleware.responseTime,
    logMiddleware.logger
]));

app.use(koaStatic(path.resolve(__dirname, './public')));
app.use(router.routes(), router.allowedMethods());

app.use(async ctx => {
    ctx.body = 'server start';
});

app.listen(config);
Console.customList([['cyan', '\n> server start: '], ['green', `http://localhost:${config.port}`]]);
Console.customList([['cyan', '> 当前服务环境: '], ['green', `${config.type}\n`]]);

module.exports = app;
