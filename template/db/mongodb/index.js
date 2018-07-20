/**
 * Created by busyhe on 2018/7/20 上午10:02.
 * Email: 525118368@qq.com
 */
const mongoose = require('mongoose');
const mongodbConf = require('../../config').mongodb;

// mongoose promise
mongoose.Promise = global.Promise;

const db = mongoose.createConnection(mongodbConf.url);

module.exports = db;
