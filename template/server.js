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
const chalk = require('chalk');
const Console = require('./common/console');
const app = new Koa();
const config = require('./config');
let port = config.port;

app.use(compose([
    errorMiddleware,
    logMiddleware.responseTime,
    logMiddleware.logger,
    bodyParser(),
    koaStatic(path.resolve(__dirname, './public')),
    router.routes(), router.allowedMethods(),
]));

app.on('error', function (err) {
    console.error(err)
});

module.exports = app;

app.listen(config);
Console.customList(`cyan@\nserver start http://localhost:${port}\n`);
