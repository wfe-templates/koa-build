const mysql = require('mysql');
const mysqlConfig = require('../../config').mysql;
const Console = require('../../common/console');

const pool = mysql.createPool(mysqlConfig);

let query = function (sql, values) {

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                Console.danger(err);
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        Console.danger(err);
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};

module.exports = {
    query
};
