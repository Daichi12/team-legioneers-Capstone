const jwt = require("jsonwebtoken");
require('dotenv').config();


function jwtGenerator(account_id) {
    const payload = {
        account: account_id
    };
   return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
}

module.exports = jwtGenerator;