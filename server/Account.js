const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const jwtAuth = require("./routes/jwtAuth");
//middleware
app.use(cors());
app.use(express.json());

//register and login routes
app.use("/account", jwtAuth);
//Account Routes

//Create an Account
/*app.post("/account", async (req, res)=> {
    try{
        const newAccount = await pool.query("INSERT INTO account (employee_firstname, employee_lastname, employee_password) VALUES($1,$2,$3) RETURNING *", 
        [req.body.Employee_FirstName, req.body.Employee_LastName, req.body.Employee_Password]);
    res.json(newAccount.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get all Accounts
app.get("/account", async(req, res) =>{
    try {
        const allAccount = await pool.query("SELECT * FROM account");
        res.json(allAccount.rows) ;
    }
        catch(err){
            console.error(err.message);
        }
    });
//get an account selection
app.get("/account/:id", async (req, res) => {
    try{
        
        const account = await pool.query("SELECT * FROM account WHERE account_id = $1", [req.body.id]);
        res.json(account.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update an account selection
app.put("/account/:id", async (req, res) => {
    try {
         const updateAccount = await pool.query("UPDATE account SET employee_firstname, employee_lastname, employee_password) = ($1,$2,$3) WHERE account_id = $4",
    [req.body.Employee_FirstName, req.body.Employee_LastName, req.body.Employee_Password, req.body.id]);
    res.json("Account was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update the employee first name
app.put("/account/employee_firstname/:id", async (req, res) => {
    try {
         
         const updateEmployeeFirstName = await pool.query("UPDATE account SET employee_firstname = $1 WHERE account_id = $2",
    [req.body.Employee_FirstName, req.body.id]);
    res.json("EmployeeFirstName was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update the employee last name
app.put("/account/employee_lastname/:id", async (req, res) => {
    try {
         const updateEmployeeLastName = await pool.query("UPDATE account SET employee_lastname = $1 WHERE account_id = $2",
    [req.body.Employee_LastName, req.body.id]);
    res.json("EmployeeLastName was updated");
        } catch (err){
        console.error(err.message);
        }  
    });
//update the employee password
app.put("/account/employee_password/:id", async (req, res) => {
    try {
         const updateEmployeePassword = await pool.query("UPDATE account SET employee_password = $1 WHERE account_id = $2",
    [req.body.Employee_Password, req.body.id]);
    res.json("EmployeePassword was updated");
        } catch (err){
        console.error(err.message);
        }  
    });
// Delete an account
app.delete("/account/:id", async (req, res) => {
    try {
         const deleteAccount = await pool.query("DELETE FROM account WHERE account_id = $1",[req.body.id]);
  res.json("Account was deleted");
        } catch (err){
        console.error(err.message);
        }
    }); 

    app.listen(5000, ()=>{
        console.log("server has started on port 5000");
    });
    */
