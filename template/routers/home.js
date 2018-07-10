/**
 * Created by busyhe on 2018/7/9 下午4:11.
 * Email: 525118368@qq.com
 */
const router = require('koa-router')();
const homeController = require('../controllers/home');

router.post('/', homeController.index);

module.exports = router;
