const Pool = require("pg").Pool;

const pool = new Pool({
host: "localhost",
database: "porticosdb",
port: 5432,
user: "postgres",
password: "Asdewq12X@"
});
module.exports = pool;