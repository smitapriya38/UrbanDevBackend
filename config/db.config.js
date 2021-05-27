const mysql = require("mysql");

// pool connection mysql
const db = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "@vishal1",
    database: "urbandev",
    connectionLimit: 10,
});

module.exports = db;

