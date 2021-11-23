const express = require('express');

let router = express.Router();



const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const pool = require('../db');
const validinfo = require('../middleware/validinfo');
const authorization = require('../middleware/authorization');

//registering

router.post("/register", validinfo, async (req, res) =>{
    try {

        //1. destructure the req.body(Employee_UserName, Employee_Password) Note: Username
        const {Employee_UserName, Employee_Password} = req.body;
        //2. check if the admin account exist (if admin account exists then throw error)
        const account = await pool.query("Select * FROM Account WHERE Employee_UserName = $1", [
            Employee_UserName
        ]);
        if (account.rows.length != 0){
            return res.status(401).json("User already exists");
        }
        //3. Bcrypt the account password
        const saltRound = 10; //Depicts how encrypted is going to be
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(Employee_Password, salt); //Encrypts Password
        //4. enter the admin account to our database

        const newAccount = await pool.query ("INSERT INTO account (Employee_UserName, Employee_Password) VALUES ($1, $2) returning *", 
        [Employee_UserName, bcryptPassword]
        );

        //res.json(newAccount);

        //5. generating our jwt token

        const token = jwtGenerator(newAccount.rows[0].account_id);
        res.json({token});

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

//login route

router.post("/login", validinfo, async(req, res)=> {
 try {

    //1. destructure the req.body
    const {Employee_UserName, Employee_Password} = req.body;
    //2. check if the admin account doesn't exist (if not then we throw error)

    const account = await pool.query("SELECT * FROM account WHERE Employee_UserName = $1", [
        Employee_UserName
    ]);

    if (account.rows.length === 0) {
        return res.status(401).json("Password or UserName is incorrect");
    }

    //3. check if incoming password is the same as the database password

    const validPassword = await bcrypt.compare(Employee_Password, account.rows[0].employee_password);

    if (!validPassword) {
        return res.status(401).json("UserName or Employee_Password is incorrect");
    }
    //4. give them the jwt token
    const token = jwtGenerator(account.rows[0].account_id);
    res.json({token});
 }   catch (err){
     console.error(err.message);
     res.status(500).json("Server Error");
 }
} )

router.get("/is_verified", authorization, async (req, res)=>{
    try {
    res.json(true);
    } catch (err) {
     console.error(err.message);
     res.status(500).json("Server Error");
    }
})

module.exports = router;
