const Pool = require("pg").Pool;

const pool = new Pool({
user: "postgres",
password: "95843",
host: "localhost",
port: 5432,
database: "porticosdb"
});

module.exports = pool;