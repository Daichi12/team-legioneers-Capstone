const Pool = require("pg").Pool;

const pool = new Pool({
host: "localhost",
database: "porticosdb",
port: 5433,
user: "postgres",
password: "95843"
});
module.exports = pool;