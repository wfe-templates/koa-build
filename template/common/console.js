/**
 * Created by busyhe on 2018/7/20 上午1:24.
 * Email: 525118368@qq.com
 * 日志颜色管理
 * child配置参考https://github.com/chalk/chalk
 */
const chalk = require('chalk');

module.exports = {
    default(msg) {
        console.log(chalk.gray(msg))
    },
    log(msg) {
        console.log(chalk.cyan(msg))
    },
    sucess(msg) {
        console.log(chalk.green(msg))
    },
    warning(msg) {
        console.log(chalk.yellow(msg))
    },
    danger(msg) {
        console.log(chalk.red(msg))
    },
    custom(type, msg) {
        console.log(chalk[type], msg)
    },
    /**
     * 多种颜色
     * type@msg@@type@msg
     * @ 分割type和message
     * @@ 分割不同类型
     * @param msgs
     */
    customList(msgs) {
        let msgVal = '';
        let msgList = msgs.split('@@');
        msgList.forEach(item => {
            let itemMsg = item.split('@');
            msgVal += chalk[itemMsg[0]](itemMsg[1]);
        });
        console.log(msgVal)
    }
};
