/**
 * Created by busyhe on 2018/7/10 上午10:50.
 * Email: 525118368@qq.com
 * build
 */
module.exports = {
    {{#if_eq dbConfig "mysql"}}
    mysql: {
        host: 'localhost',
        user: 'root',
        database: 'test',
        password : 'busyhe317',
        port: 3306
    }{{/if_eq}},
    {{#if_eq lintConfig "mongodb"}}
    mongodb: {
        url: 'mongodb://localhost:27017/test'
    }
    {{/if_eq}}
};
