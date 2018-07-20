const fs = require('fs');
const getSqlContentMap = require('./util/get-sql-content-map');
const {query} = require('../db/mysql/index');
const Console = require('../common/console');


// 打印脚本执行日志
const eventLog = function (err, sqlFile, index) {
    if (err) {
        Console.danger(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
    } else {
        Console.sucess(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
    }
};

// 获取所有sql脚本内容
let sqlContentMap = getSqlContentMap();

// 执行建表sql脚本
const createAllTables = async () => {
    for (let key in sqlContentMap) {
        let sqlShell = sqlContentMap[key];
        let sqlShellList = sqlShell.split(';');

        for (let [i, shell] of sqlShellList.entries()) {
            if (shell.trim()) {
                let result = await query(shell)
                if (result.serverStatus * 1 === 2) {
                    eventLog(null, key, i)
                } else {
                    eventLog(true, key, i)
                }
            }
        }
    }
    Console.log('\nsql脚本执行结束！\n');
    // Console.customList('cyan@请按 @@green@ctrl + c @@cyan@退出');
    process.exit();
};

createAllTables();

