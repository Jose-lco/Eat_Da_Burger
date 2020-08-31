let mysql = require('mysql');
require('dotenv').config();
let db;
if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    db = mysql.createConnection({
        port: 3306,
        host: "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        username: "q8j27q8e2qf4n2ph",
        password: "lol16whwjuthd11y",
        database: "m7vephl4fexmnsrn"
    })
}
db.connect((err) => {
    if (err) throw err;
    console.log(`Connected on ${db.threadId}`)
})
module.exports = db;