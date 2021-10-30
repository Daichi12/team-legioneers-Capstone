const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Merchandise Shop Routes

//Create a merchandise
app.post("/merchandise_shop", async (req, res)=> {
    try{
        
        const newMerchandiseShop = await pool.query("INSERT INTO merchandise_shop (merchandise_name, merchandise_description, merchandise_pricing) VALUES($1,$2,$3) RETURNING *", 
        [req.body.Merchandise_Name, req.body.Merchandise_Description, req.body.Merchandise_Pricing]);
    res.json(newMerchandiseShop.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get all merchandise
app.get("/merchandise_shop", async(req, res) =>{
    try {
        const allMerchandiseShop = await pool.query("SELECT * FROM merchandise_shop");
        res.json(allMerchandiseShop.rows); 
    }
        catch(err){
            console.error(err.message);
        }
    });
//get a merchandise selection
app.get("/merchandise_shop/:id", async (req, res) => {
    try{
        const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
        res.json(merchandise_shop.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update a merchandise selection
app.put("/merchandise_shop/:id", async (req, res) => {
    try {
         
         const updateMerchandise = await pool.query("UPDATE merchandise_shop SET (merchandise_name, merchandise_description, merchandise_pricing) = ($1,$2,$3) WHERE merchandise_id = $4",
    [req.body.Merchandise_Name, req.body.Merchandise_Description, req.body.Merchandise_Pricing, req.body.id]);
    res.json("Merchandise was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update the merchandise name
app.put("/merchandise_shop/merchandise_name/:id", async (req, res) => {
    try {
         const updateMerchandiseName = await pool.query("UPDATE merchandise_shop SET merchandise_name= $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Name, req.body.id]);
    res.json("Merchandise Name was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update the merchandise description
app.put("/merchandise_shop/merchandise_description/:id", async (req, res) => {
    try {
         const updateMerchandiseDescription = await pool.query("UPDATE merchandise_shop SET merchandise_description = $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Description, req.body.id]);
    res.json("MerchandiseDescription was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update the merchandise pricing
app.put("/merchandise_shop/merchandise_pricing/:id", async (req, res) => {
    try {
         const updateMerchandisePricing = await pool.query("UPDATE merchandise_shop SET merchandise_pricing= $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Pricing, req.body.id]);
    res.json("MerchandisePricing was updated");
        } catch (err){
        console.error(err.message);
        }
    });
// Delete a merchandise
app.delete("/merchandise_shop/:id", async (req, res) => {
    try {
         const deleteMerchandise = await pool.query("DELETE FROM merchandise_shop WHERE merchandise_id = $1",[req.body.id]);
  res.json("Merchandise was deleted");
        } catch (err){
        console.error(err.message);
        }
    }); 