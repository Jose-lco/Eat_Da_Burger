let mysql = require('mysql');
require('dotenv').config();
let db = mysql.createConnection({
    port: 3306,
    user: 'root',
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'burgers_db'
})
db.connect((err) => {
    if(err) throw err;
    console.log(`Connected on ${db.threadId}`)
})
module.exports = db;