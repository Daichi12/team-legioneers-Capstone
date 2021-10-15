const Pool = require("pg").Pool;

const pool = new Pool({
user: "postgres",
password: "jackychan69X",
host: "localhost",
port: 5432,
database: "porticosdb"
});

module.exports = pool;