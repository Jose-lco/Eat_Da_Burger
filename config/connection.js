let mysql = require('mysql');
require('dotenv').config();
let db;
if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    db = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD,
        database: "burgers_db"
    })
}
db.connect((err) => {
    if (err) throw err;
    console.log(`Connected on ${db.threadId}`)
})
module.exports = db;