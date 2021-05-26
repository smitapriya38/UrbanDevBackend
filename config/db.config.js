const mysql = require("mysql");

// pool connection mysql
const db = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "urbandev",
    connectionLimit: 10,
});

module.exports = db;

