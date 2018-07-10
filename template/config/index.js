/**
 * Created by busyhe on 2018/7/10 上午10:50.
 * Email: 525118368@qq.com
 */
const commander = require('../common/commander');
const config = commander.build ? require('./build') : require('./dev');
const dev = require('./dev');
const build = require('./build');

const commmonConfig = {
    type: commander.build ? 'build' : 'dev',
    port: commander.port || 8765,
};

module.exports = Object.assign({}, commmonConfig, config);
