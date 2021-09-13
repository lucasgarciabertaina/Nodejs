const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "20421846619Lg",
    host: "localhost",
    port: 5432,
    database: "system"
});

module.exports = pool;