const mysql = require('mysql');
const config = require('../config');

async function query(sql, callback) {
    const connection = mysql.createConnection(config.db);
    connection.connect((err) => {
        if (err) throw err;
        //query the db
        connection.query(sql, (err, result) => {
            if (err) throw err;
            //console.log(result);
            return result
            callback(result[0]);
        })
    })
}

module.exports = { query };