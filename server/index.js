
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const jwtAuth = require("./routes/jwtAuth");
const authorization = require("./middleware/authorization");
//var bodyParser = require('body-parser');
//middleware
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json())
//register and login routes
app.use("/account", jwtAuth);

//Admin Route
app.use("/dashboard", require("./routes/dashboard"))
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
*/

//Event Reservations Routes

//Create an Event Reservation
app.post("/event_reservations", async (req, res)=> {
    try{
        const newEventReservation = await pool.query("INSERT INTO event_reservations (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *", 
        [req.body.Venuename, req.body.Venuegroup, req.body.Venuephone, req.body.Venueemail, req.body.starttime, req.body.endtime, req.body.Venuemessage]);
    res.json(newEventReservation.rows[0]);
    res.status(200).json({'message':'Created Reservation'})
    } catch (err) {
        
        res.status(500).json(err.message);
        //console.error(err.message);
    }
});
//get all event reservations
app.get("/event_reservations", async(req, res) =>{
    try {
        const allEventReservations = await pool.query("SELECT * FROM event_reservations");
        res.json(allEventReservations.rows);
        res.status(200).json({'message':'Returned all Event Reservations'})
     }
        catch(err){
           
            res.status(500).json(err.message);
        }
    });
//get an event reservation
app.get("/event_reservations/:id", async (req, res) => {
    try{
        
        const event_reservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);
        if(event_reservation.rows.length){
        res.json(event_reservation.rows[0]);
        res.status(200).json({'message':'Returned Event Reservation'})
        }
        else{ 
            res.status(404).json({'message':'Event Reservation Not Found'})
        }
        
    } catch (err) {
        res.status(500).json(err.message);
    }
});
//update an event reservation
app.put("/event_reservations/:id", async (req, res) => {
    try {
    const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventReservation = await pool.query("UPDATE event_reservations SET (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) = ($1,$2,$3,$4,$5,$6,$7) WHERE reservation_id = $8",
    [req.body.Venuename, req.body.Venuegroup, req.body.Venuephone, req.body.Venueemail, req.body.starttime, req.body.endtime, req.body.Venuemessage, req.body.id]);
    res.status(200).json({'message':'Event Reservation was updated'}) 
    
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
        } catch (err){
            res.status(500).json(err.message);
        }
    });

//update event reservation name
app.put("/event_reservations/reservation_name/:id", async (req, res) => {
    try {
    const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
    const updateEventReservationName = await pool.query("UPDATE event_reservations SET reservation_name = $1 WHERE reservation_id = $2",
    [req.body.Venuename,req.body.id]);
    res.status(200).json({'message':'Event Reservation Name was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
    } catch (err){
        res.status(500).json(err.message);        }
    });
//update event reservation group size
app.put("/event_reservations/group_size/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventGroupSize = await pool.query("UPDATE event_reservations SET group_size = $1 WHERE reservation_id = $2",
        [req.body.Venuegroup,req.body.id]);
    res.status(200).json({'message':'Event Reservation Group Size was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update event reservation Phone
app.put("/event_reservations/phone/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventPhone = await pool.query("UPDATE event_reservations SET phone = $1 WHERE reservation_id = $2",
    [req.body.Venuephone,req.body.id]);
    res.status(200).json({'message':'Event Reservation Name was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
         
    res.json("EventPhone was updated");
        } catch (err){
            res.status(500).json(err.message);        }
    });

//update event reservation Email
app.put("/event_reservations/email/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventEmail = await pool.query("UPDATE event_reservations SET email = $1 WHERE reservation_id = $2",
    [req.body.Venueemail,req.body.id]);
    res.status(200).json({'message':'Event Reservation Email was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
    } catch (err){
        res.status(500).json(err.message);        }
    });
//update event reservation start time
app.put("/event_reservations/event_start_time/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventStartTime = await pool.query("UPDATE event_reservations SET event_start_time = $1 WHERE reservation_id = $2",
    [req.body.starttime,req.body.id]);
    res.status(200).json({'message':'Event Reservation Start Time was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
    } catch (err){
        res.status(500).json(err.message);        }
    });
//update event reservation end time
app.put("/event_reservations/event_end_time/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
    if(getEventReservation.rows.length){
        const updateEventEndTime = await pool.query("UPDATE event_reservations SET event_end_time = $1 WHERE reservation_id = $2",
    [req.body.endtime,req.body.id]);
    res.status(200).json({'message':'Event Reservation End Time was updated'}) 
        }
        else{
            res.status(404).json({'message':'Event Reservation Not Found'})
        } 
    } catch (err){
        res.status(500).json(err.message);        }
    });
//update event reservation notes
app.put("/event_reservations/notes/:id", async (req, res) => {
    try {
        const getEventReservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);   
        if(getEventReservation.rows.length){
            const updateEventNotes = await pool.query("UPDATE event_reservations SET notes = $1 WHERE reservation_id = $2",
    [req.body.Venuemessage,req.body.id]);
        res.status(200).json({'message':'Event Reservation Notes was updated'}) 
            }
            else{
                res.status(404).json({'message':'Event Reservation Not Found'})
            } 
        } catch (err){
            res.status(500).json(err.message);        }
    });
//delete an event reservation
app.delete("/event_reservations/:id", async (req, res) => {
    try { 
    const event_reservation = await pool.query("SELECT * FROM event_reservations WHERE reservation_id = $1", [req.body.id]);
    if(event_reservation.rows.length){
    const deleteEventReservation = await pool.query("DELETE FROM event_reservations WHERE reservation_id = $1",[req.body.id]);
    res.status(200).json({'message':'Event Reservation was deleted'})
    }
    else{
        res.status(404).json({'message':'Event Reservation does not exist'})
    }
    } catch (err){
        res.status(500).json(err.message);        }
    }); 

    //Menu Routes//

//Create a Menu Selection 

app.post("/menu", async(req, res) => {
    try {
      const newMenu = await pool.query(`INSERT INTO Menu (Dish_Name, Dish_Type, Dish_Description, Pricing) VALUES($1, $2, $3, $4)`, 
      [req.body.Dish_Name, req.body.Dish_Type, req.body.Dish_Description, req.body.Pricing]
      );  
      res.json(newMenu);
      res.status(200).json({'message':'Created Menu Selection'})
      //console.log(req.body);

    } catch (error) {
        res.status(500).json(err.message);    }
})

//get all Menu Selections
app.get("/menu", async(req, res) =>{
    try {
        const allMenu = await pool.query("SELECT * FROM menu");
        res.json(allMenu.rows)
        res.status(200).json({'message':'Menu has been Returned'})
     }
        catch(err){
            res.status(500).json(err.message);        }
    });
//Get a Menu Selection
app.get("/menu/:id", async (req, res) => {
    try{
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
        if(menu.rows.length){
            res.json(menu.rows[0]);
            res.status(200).json({'message':'Returned Dish Selection'})
            }
            else{
                res.status(404).json({'message':'Menu Not Found'})
            }
    } catch (err) {
        res.status(500).json(err.message);    }
});

//Update a Menu Selection
app.put("/menu/:id", async (req, res) => {
    try {
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
        if(menu.rows.length){
            const updateDish = await pool.query("UPDATE menu SET (Dish_Name, Dish_Description, Pricing, Dish_Type) = ($1,$2,$3,$4) WHERE dish_id = $5",
    [req.body.Dish_Name, req.body.Dish_Description, req.body.Pricing, req.body.Dish_Type, req.body.id]);
            res.status(200).json({'message':'Dish was updated'})
            }
            else{
                res.status(404).json({'message':'Menu Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
    
    //Update a dish_name
app.put("/menu/dish_name/:id", async (req, res) => {
    try {
    const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
    if(menu.rows.length){
        const updateDishName = await pool.query("UPDATE menu SET Dish_Name = $1 WHERE dish_id = $2",
    [req.body.Dish_Name, req.body.id]);
        res.status(200).json({'message':'Dish Name was updated'})
        }
        else{
            res.status(404).json({'message':'Menu Not Found'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    });
    //Update a dish_description
app.put("/menu/dish_description/:id", async (req, res) => {
    try {
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
    if(menu.rows.length){
        const updateDishDescription = await pool.query("UPDATE menu SET dish_description = $1 WHERE dish_id = $2",
    [req.body.Dish_Description, req.body.id]);
        res.status(200).json({'message':'Dish Description was updated'})
        }
        else{
            res.status(404).json({'message':'Menu Not Found'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    });
   
    //Update a dish_pricing
app.put("/menu/dish_pricing/:id", async (req, res) => {
    try {
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
    if(menu.rows.length){
        const updateDishPricing = await pool.query("UPDATE menu SET dish_pricing = $1 WHERE dish_id = $2",
    [req.body.Pricing, req.body.id]);
        res.status(200).json({'message':'Dish Pricing was updated'})
        }
        else{
            res.status(404).json({'message':'Menu Not Found'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//Update a dish_type
app.put("/menu/dish_type/:id", async (req, res) => {
    try {
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
        if(menu.rows.length){
            const updateDishType = await pool.query("UPDATE menu SET dish_type = $1 WHERE dish_id = $2",
    [req.body.Dish_Type, req.body.id]);
            res.status(200).json({'message':'Dish Type was updated'})
            }
            else{
                res.status(404).json({'message':'Menu Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//Delete a Menu Selection
app.delete("/menu/:id", async (req, res) => {
    try {
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [req.body.id]);
        if(menu.rows.length){
            const deleteDish = await pool.query("DELETE FROM menu WHERE dish_id = $1",[req.body.id]);
            res.status(200).json({'message':'Dish was deleted'})
            }
            else{
                res.status(404).json({'message':'Menu Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    }); 

//Merchandise Shop Routes

//Create a merchandise
app.post("/merchandise_shop", async (req, res)=> {
    try{
        
        const newMerchandiseShop = await pool.query("INSERT INTO merchandise_shop (merchandise_name, merchandise_description, merchandise_pricing) VALUES($1,$2,$3) RETURNING *", 
        [req.body.Merchandise_Name, req.body.Merchandise_Description, req.body.Merchandise_Pricing]);
    res.json(newMerchandiseShop.rows[0]);
    res.status(200).json({'message':'Created a Merchandise Selection'})
    } catch (err) {
        res.status(500).json(err.message);    }
});
//get all merchandise
app.get("/merchandise_shop", async(req, res) =>{
    try {
        
        const allMerchandiseShop = await pool.query("SELECT * FROM merchandise_shop");
        res.json(allMerchandiseShop.rows); 
        res.status(200).json({'message':'Returned all Merchandise'})
    }
        catch(err){
            res.status(500).json(err.message);        }
    });
//get a merchandise selection
app.get("/merchandise_shop/:id", async (req, res) => {
    try{
        const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
        if(merchandise_shop.rows.length){
            res.json(merchandise_shop.rows[0]);
            res.status(200).json({'message':'Returned Merchandise Selection'})
            }
            else{
    
                
                res.status(404).json({'message':'Merchandise Not Found'})
            }
    } catch (err) {
        res.status(500).json(err.message);    }
});
//update a merchandise selection
app.put("/merchandise_shop/:id", async (req, res) => {
    try {
        const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
        if(merchandise_shop.rows.length){
            const updateMerchandise = await pool.query("UPDATE merchandise_shop SET (merchandise_name, merchandise_description, merchandise_pricing) = ($1,$2,$3) WHERE merchandise_id = $4",
    [req.body.Merchandise_Name, req.body.Merchandise_Description, req.body.Merchandise_Pricing, req.body.id]);
            res.status(200).json({'message':'Merchandise was updated'})
            }
            else{
                res.status(404).json({'message':'Merchandise Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update the merchandise name
app.put("/merchandise_shop/merchandise_name/:id", async (req, res) => {
    try {
    const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
    if(merchandise_shop.rows.length){
        const updateMerchandiseName = await pool.query("UPDATE merchandise_shop SET merchandise_name= $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Name, req.body.id]);
        res.status(200).json({'message':'Merchandise Name was updated'})
        }
        else{
            res.status(404).json({'message':'Merchandise Not Found'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update the merchandise description
app.put("/merchandise_shop/merchandise_description/:id", async (req, res) => {
    try {
        const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
    if(merchandise_shop.rows.length){
        const updateMerchandiseDescription = await pool.query("UPDATE merchandise_shop SET merchandise_description = $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Description, req.body.id]);
        res.status(200).json({'message':'Merchandise Description was updated'})
        }
        else{
            res.status(404).json({'message':'Merchandise Not Found'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update the merchandise pricing
app.put("/merchandise_shop/merchandise_pricing/:id", async (req, res) => {
    try {
        const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
        if(merchandise_shop.rows.length){
        const updateMerchandisePricing = await pool.query("UPDATE merchandise_shop SET merchandise_pricing= $1 WHERE merchandise_id = $2",
    [req.body.Merchandise_Pricing, req.body.id]);
            res.status(200).json({'message':'Merchandise Price was updated'})
            }
            else{
                res.status(404).json({'message':'Merchandise Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
// Delete a merchandise
app.delete("/merchandise_shop/:id", async (req, res) => {
    try {
    const merchandise_shop = await pool.query("SELECT * FROM merchandise_shop WHERE merchandise_id = $1", [req.body.id]);
    if(merchandise_shop.rows.length){
        const deleteMerchandise = await pool.query("DELETE FROM merchandise_shop WHERE merchandise_id = $1",[req.body.id]);
        res.status(200).json({'message':'Merchandise  was Deleted'})
        }
        else{
            res.status(404).json({'message':'Merchandise does not exist'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    }); 

//Table Reservations Routes

//Create a table Reservation
app.post("/table_reservations", async (req, res)=> {
    try{
        
    const newTableReservation = await pool.query("INSERT INTO table_reservations (reservation_name, reservation_time, group_size, phone, notes) VALUES($1,$2,$3,$4,$5) RETURNING *", 
    [req.body.name, req.body.time, req.body.group, req.body.phone, req.body.message]);
    res.json(newTableReservation.rows[0]);
    res.status(200).send({message:'Created Table Reservation'})
    } catch (err) {
        res.status(500).json(err.message);    }
});
//get all table reservations
app.get("/table_reservations", async(req, res) =>{
    try {
        const allTableReservations = await pool.query("SELECT * FROM table_reservations");
        res.json(allTableReservations.rows);
        res.status(200).json({'message':'Returned all Table Reservations'})
     }
        catch(err){
            res.status(500).send(err.message);        }
    });
//get a table reservation
app.get("/table_reservations/:id", async (req, res) => {
    try{
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            res.json(table_reservation.rows[0]);
            res.status(200).json({'message':'Returned Table Reservation'})
            }
            else{   
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
    } catch (err) {
        res.status(500).json(err.message);    }
});
//update a table reservation
app.put("/table_reservations/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTableReservation = await pool.query("UPDATE table_reservations SET (reservation_name, reservation_time, group_size, phone, notes) = ($1,$2,$3,$4,$5) WHERE reservation_id = $6",
    [req.body.name, req.body.time, req.body.group, req.body.phone, req.body.message, req.body.id]);
            res.status(200).json({'message':'Table Reservation was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update table reservation name
app.put("/table_reservations/reservation_name/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTableReservationName = await pool.query("UPDATE table_reservations SET reservation_name = $1 WHERE reservation_id = $2",
            [req.body.name,req.body.id]);
            res.status(200).json({'message':'Table Reservation Name was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update table reservation time
app.put("/table_reservations/reservation_time/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTableReservationTime = await pool.query("UPDATE table_reservations SET reservation_time = $1 WHERE reservation_id = $2",
    [req.body.time,req.body.id]);
            res.status(200).json({'message':'Table Reservation Time was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update group size
app.put("/table_reservations/group_size/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTableGroupSize = await pool.query("UPDATE table_reservations SET group_size = $1 WHERE reservation_id = $2",
    [req.body.Group_Size,req.body.id]);
            res.status(200).json({'message':'Table Reservation Group Size was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update phone
app.put("/table_reservations/phone/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTablePhone = await pool.query("UPDATE table_reservations SET phone = $1 WHERE reservation_id = $2",
    [req.body.Phone,req.body.id]);
            res.status(200).json({'message':'Table Reservation Phone was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
         
    res.json("TablePhone was updated");
        } catch (err){
            res.status(500).json(err.message);        }
    });
//update notes
app.put("/table_reservations/notes/:id", async (req, res) => {
    try {
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
        if(table_reservation.rows.length){
            const updateTableNotes = await pool.query("UPDATE table_reservations SET notes = $1 WHERE reservation_id = $2",
    [req.body.message,req.body.id]);
            res.status(200).json({'message':'Table Reservation Notes was updated'})
            }
            else{      
            res.status(404).json({'message':'Table Reservation Not Found'})
            }
         
    res.json("TableNotes was updated");
        } catch (err){
            res.status(500).json(err.message);        }
    });
//delete table reservation
app.delete("/table_reservations/:id", async (req, res) => {
    try {const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE reservation_id = $1", [req.body.id]);
    if(table_reservation.rows.length){
        const deleteTableReservation = await pool.query("DELETE FROM table_reservations WHERE reservation_id = $1",[req.body.id]);
        res.status(200).json({'message':'Table Reservation was deleted'})
        }
        else{  
        res.status(404).json({'message':'Table Reservation does not Exist'})
        }
        } catch (err){
            res.status(500).json(err.message);        }
    }); 

    app.listen(5000, ()=>{
        console.log("server has started on port 5000");
    });
    
