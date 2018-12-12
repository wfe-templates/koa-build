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
            },
            {
                name: 'none',
                value: 'none',
                short: 'none',
            }
        ]
    },
    filters: {
        // 'db/**/*': "use_db",
        'db/mongodb/**/*': "db && dbConfig === 'mongodb'",
        'db/mysql/*': "db && dbConfig === 'mysql'"
    },
    completeMessage: 'To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack'
};
