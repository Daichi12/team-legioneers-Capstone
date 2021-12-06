const Pool = require("pg").Pool;
require("dotenv").config();

/*const devConfig = {

user: process.env.PG_USER,
password: process.env.PG_PASSWORD,
host: process.env.PG_HOST,
database: process.env.PG_DATABASE,
port: process.env.PG_PORT,
};/*
/*const pool = new Pool({
host: "localhost",
database: "porticosdb",
port: 5433,
user: "postgres",
password: "95843"
});*/
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool =
  process.env.NODE_ENV === "production"
    ? new Pool({
        connectionString: proConfig,
        ssl: {
          rejectUnauthorized: false,
        },
      })
    : new Pool({
        connectionString: devConfig,
      });

module.exports = pool;