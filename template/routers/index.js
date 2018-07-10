/**
 * Created by busyhe on 2018/7/9 下午4:09.
 * Email: 525118368@qq.com
 */

const Router = require('koa-router');
const home = require('./home');
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'server starting'
});
router.use('/api/home', home.routes(), home.allowedMethods());

module.exports = router;
