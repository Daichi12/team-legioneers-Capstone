const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    //res.json(req.account)
    const account = await pool.query(
      "SELECT employee_username FROM account WHERE account_id = $1",
      [req.account] 
    );  
    res.json(account.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;