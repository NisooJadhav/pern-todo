const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "nishant",
    host: "localhost",
    port: 7777,
    database: "todo"
})

module.exports = pool