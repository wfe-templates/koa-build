/**
 * Created by busyhe on 2018/7/19 下午11:55.
 * Email: 525118368@qq.com
 */
module.exports = {
    {{#if_eq lintConfig "mongodb"}}
    mongodb: {
        CREATE_ERROR: 'mongodb: 数据库创建失败',
        DELETE_ERROR: 'mongodb: 数据库删除失败',
        UPDATE_ERROR: 'mongodb: 数据库更新失败',
        FIND_ERROR: 'mongodb: 数据库查找失败'
    },
    {{/if_eq}}
    server: {
        SERVER_ERROR: '请求服务器失败'
    }
};
