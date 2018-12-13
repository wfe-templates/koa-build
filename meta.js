module.exports = {
    helpers: {
        if_or: function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A Koa2 project',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        db: {
            type: 'confirm',
            message: 'Use db to your server',
        },
        dbConfig: {
            when: 'db',
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
                }
            ]
        }
    },
    filters: {
        'db/mongodb/**/*': "db && dbConfig === 'mongodb'",
        'db/mysql/*': "db && dbConfig === 'mysql'",
        'init/**/*': "db && dbConfig === 'mysql'"
    },
    completeMessage: 'To get started:\n\n  npm run dev'
};
