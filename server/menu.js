const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Menu Routes//

//Create a Menu Selection 

app.post("/menu", async(req, res) => {
    try {
      const newMenu = await pool.query(`INSERT INTO Menu (Dish_Name, Dish_Type, Dish_Description, Pricing) VALUES($1, $2, $3, $4)`, 
      [req.body.Dish_Name, req.body.Dish_Type, req.body.Dish_Description, req.body.Pricing]
      );  
      res.json(newMenu);
      //console.log(req.body);

    } catch (error) {
        console.error(error.message);
    }
})

//get all Menu Selections
app.get("/menu", async(req, res) =>{
    try {
        const allMenu = await pool.query("SELECT * FROM menu");
        res.json(allMenu.rows) }
        catch(err){
            console.error(err.message);
        }
    });
//Get a Menu Selection
app.get("/menu/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [id]);
        res.json(menu.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update a Menu Selection
app.put("/menu/:id", async (req, res) => {
    try {
         const updateDish = await pool.query("UPDATE menu SET (Dish_Name, Dish_Description, Pricing, Dish_Type) = ($1,$2,$3,$4) WHERE dish_id = $5",
    [req.body.Dish_Name, req.body.Dish_Description, req.body.Pricing, req.body.Dish_Type, req.body.id]);
    res.json("Dish was updated");
        } catch (err){
        console.error(err.message);
        }
    });
    
    //Update a dish_name
app.put("/menu/dish_name/:id", async (req, res) => {
    try {
         const updateDishName = await pool.query("UPDATE menu SET Dish_Name = $1 WHERE dish_id = $2",
    [req.body.Dish_Name, req.body.id]);
    res.json("DishName was updated");
        } catch (err){
        console.error(err.message);
        }
    });
    //Update a dish_description
app.put("/menu/dish_description/:id", async (req, res) => {
    try {
         const updateDishDescription = await pool.query("UPDATE menu SET dish_description = $1 WHERE dish_id = $2",
    [req.body.Dish_Description, req.body.id]);
    res.json("DishDescription was updated")
        } catch (err){
        console.error(err.message);
        }
    });
   
    //Update a dish_pricing
app.put("/menu/dish_pricing/:id", async (req, res) => {
    try {
         const updateDishPricing = await pool.query("UPDATE menu SET dish_pricing = $1 WHERE dish_id = $2",
    [req.body.Pricing, req.body.id]);
    res.json("DishPricing was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//Update a dish_type
app.put("/menu/dish_type/:id", async (req, res) => {
    try {
         const updateDishType = await pool.query("UPDATE menu SET dish_type = $1 WHERE dish_id = $2",
    [req.body.Dish_Type, req.body.id]);
    res.json("DishType was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//Delete a Menu Selection
app.delete("/menu/:id", async (req, res) => {
    try {
         
         const deleteDish = await pool.query("DELETE FROM menu WHERE dish_id = $1",[req.body.id]);
    res.json("Dish was deleted");
        } catch (err){
        console.error(err.message);
        }
    }); 
app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});