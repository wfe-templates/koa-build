module.exports = {
    name: {
        type: 'string',
        required: true,
        message: 'Project name',
    },
    description: {
        type: 'string',
        required: false,
        message: 'Project description',
        default: 'A Vue.js project',
    },
    author: {
        type: 'string',
        message: 'Author',
    },
    use_db: {
        type: 'confirm',
        message: '是否使用数据库',
    },
    db: {
        when: 'use_db',
        type: 'list',
        message: 'select db',
        choices: [
            {
                name: 'Mongodb',
                value: 'mongodb',
                short: 'mongodb',
            },
            {
                name: 'Mysql',
                value: 'mysql',
                short: 'mysql',
            },
            {
                name: 'none',
                value: 'none',
                short: 'none',
            }
        ]
    },
    filters: {
        'db/**/*': "use_db",
        'db/mongodb/**/*': "use_db && db === 'mongodb'",
        'db/mysql/**/*': "use_db && db === 'mysql'"
    }
};
