/**
 * Created by busyhe on 2018/7/5 上午10:31.
 * Email: 525118368@qq.com
 */
const Koa = require('koa');
const bodyParser = require('koa-body');
const koaStatic = require('koa-static');
const compose = require('koa-compose');
const router = require('./routers/index');
const log = require('./middleware/log');
const path = require('path');
const chalk = require('chalk');
const app = new Koa();
const config = require('./config');
let port = config.port;

app.use(compose([
    log.responseTime,
    log.logger,
    bodyParser(),
    koaStatic(path.resolve(__dirname, './dist')),
    router.routes(), router.allowedMethods(),
]));

app.on('error', function (err) {
    chalk.red(err)
});

app.listen(config);
console.log(chalk.cyan(`\nserver start http://localhost:${port}\n`));
