// module imports
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

// pool connection mysql
const db = mysql.createPool({
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
});

module.exports = db;

