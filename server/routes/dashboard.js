const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    const account = await pool.query(
      "SELECT employee_username FROM account WHERE account_id = $1",
      [req.account.account_id] 
    ); 
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(account.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;