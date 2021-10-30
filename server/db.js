const Pool = require("pg").Pool;

const pool = new Pool({
user: "postgres",
password: "jackychan69X",
host: "localhost",
database: "porticosdb",
port: 5433
});
module.exports = pool;