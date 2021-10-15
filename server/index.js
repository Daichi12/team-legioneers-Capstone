const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});
//ROUTES//

//Create for account table 
app.post("/account", async (req, res)=> {
    try{
        const {employee_firstname, employee_lastname, employee_password} = req.body;
        const newAccount = await pool.query("INSERT INTO account (employee_firstname, employee_lastname, employee_password) VALUES($1,$2,$3) RETURNING *", 
        [employee_firstname, employee_lastname, employee_password]);
    res.json(newAccount.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Create for menu table
app.post("/menu", async (req, res)=> {
    try{
        const {dish_name, dish_description, dish_pricing, dish_type} = req.body;
        const newMenu = await pool.query("INSERT INTO menu (dish_name, dish_description, dish_pricing, dish_type) VALUES($1,$2,$3,$4) RETURNING *", 
        [dish_name, dish_description, dish_pricing, dish_type]);
    res.json(newMenu.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Create for gift shop
app.post("/gift_shop", async (req, res)=> {
    try{
        const {merchandise_name, merchandise_description, merchandise_pricing} = req.body;
        const newGiftShop = await pool.query("INSERT INTO gift_shop (merchandise_name, merchandise_description, merchandise_pricing) VALUES($1,$2,$3) RETURNING *", 
        [merchandise_name, merchandise_description, merchandise_pricing]);
    res.json(newGiftShop.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Create for event reservation
app.post("/event_reservations", async (req, res)=> {
    try{
        const {reservation_name, group_size, phone, email, event_start_time, event_end_time, notes} = req.body;
        const newEventReservation = await pool.query("INSERT INTO event_reservations (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *", 
        [reservation_name, group_size, phone, email, event_start_time, event_end_time, notes]);
    res.json(newEventReservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Create for table reservation
app.post("/table_reservations", async (req, res)=> {
    try{
        const {reservation_name, reservation_time, group_size, phone, notes} = req.body;
        const newTableReservation = await pool.query("INSERT INTO table_reservations (reservation_name, reservation_time, group_size, phone, notes) VALUES($1,$2,$3,$4,$5) RETURNING *", 
        [reservation_name, reservation_time, group_size, phone, notes]);
    res.json(newTableReservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get all account
app.get("/account", async(req, res) =>{
    try {
        const allAccount = await pool.query("SELECT * FROM account");
        res.json(allAccount.rows) }
        catch(err){
            console.error(err.message);
        }
    });

//Get all menu
    app.get("/menu", async(req, res) =>{
        try {
            const allMenu = await pool.query("SELECT * FROM menu");
            res.json(allMenu.rows) }
            catch(err){
                console.error(err.message);
            }
        });

        //Get all giftshop
    app.get("/gift_shop", async(req, res) =>{
        try {
            const allGiftShop = await pool.query("SELECT * FROM gift_shop");
            res.json(allGiftShop.rows) }
            catch(err){
                console.error(err.message);
            }
        });

    //Get all event reservations
    app.get("/event_reservations", async(req, res) =>{
        try {
            const allEventReservations = await pool.query("SELECT * FROM event_reservations");
            res.json(allEventReservations.rows) }
            catch(err){
                console.error(err.message);
            }
        });

        //Get all table reservations
    app.get("/table_reservations", async(req, res) =>{
        try {
            const allTableReservations = await pool.query("SELECT * FROM table_reservations");
            res.json(allTableReservations.rows) }
            catch(err){
                console.error(err.message);
            }
        });

//Get an account
app.get("/account/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const account = await pool.query("SELECT * FROM account WHERE account_id = $1", [id]);
        res.json(account.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a dish
app.get("/menu/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const menu = await pool.query("SELECT * FROM menu WHERE dish_id = $1", [id]);
        res.json(menu.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get a merchandise
app.get("/gift_shop/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const gift_shop = await pool.query("SELECT * FROM gift_shop WHERE merchandise_id = $1", [id]);
        res.json(gift_shop.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Get an event reservation
app.get("/event_reservations/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const event_reservation = await pool.query("SELECT * FROM event_reservations WHERE event_reservation_id = $1", [id]);
        res.json(event_reservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


//Get a table reservation
app.get("/table_reservations/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE table_reservation_id = $1", [id]);
        res.json(table_reservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//Update an account
app.put("/account/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {employee_firstname, employee_lastname, employee_password} = req.body;
         const updateAccount = await pool.query("UPDATE account SET employee_firstname, employee_lastname, employee_password) = ($1,$2,$3) WHERE account_id = $4",
    [employee_firstname, employee_lastname, employee_password, id]);
    res.json("Account was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a employee_firstname
app.put("/account/employee_firstname/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {employee_firstname} = req.body;
         const updateEmployeeFirstName = await pool.query("UPDATE account SET employee_firstname = $1 WHERE account_id = $2",
    [employee_firstname, id]);
    res.json("EmployeeFirstName was updated")
        } catch (err){
        console.error(err.message)
        }
    });

           //Update a employee_lastname
app.put("/account/employee_lastname/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {employee_lastname} = req.body;
         const updateEmployeeLastName = await pool.query("UPDATE account SET employee_lastname = $1 WHERE account_id = $2",
    [ employee_lastname, id]);
    res.json("EmployeeLastName was updated")
        } catch (err){
        console.error(err.message)
        }  
    });

               //Update an employee_password
app.put("/account/employee_password/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {employee_password} = req.body;
         const updateEmployeePassword = await pool.query("UPDATE account SET employee_password = $1 WHERE account_id = $2",
    [employee_password, id]);
    res.json("EmployeePassword was updated")
        } catch (err){
        console.error(err.message)
        }  
    });
    

//Update a dish
app.put("/menu/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {dish_name, dish_description, dish_pricing, dish_type} = req.body;
         const updateDish = await pool.query("UPDATE menu SET (dish_name, dish_description, dish_pricing, dish_type) = ($1,$2,$3,$4) WHERE dish_id = $5",
    [dish_name, dish_description, dish_pricing, dish_type, id]);
    res.json("Dish was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a dish_name
app.put("/menu/dish_name/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {dish_name} = req.body;
         const updateDishName = await pool.query("UPDATE menu SET dish_name = $1 WHERE dish_id = $2",
    [dish_name, id]);
    res.json("DishName was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a dish_description
app.put("/menu/dish_description/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {dish_description} = req.body;
         const updateDishDescription = await pool.query("UPDATE menu SET dish_description = $1 WHERE dish_id = $2",
    [dish_description, id]);
    res.json("DishDescription was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a dish_pricing
app.put("/menu/dish_pricing/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {dish_pricing} = req.body;
         const updateDishPricing = await pool.query("UPDATE menu SET dish_pricing = $1 WHERE dish_id = $2",
    [dish_pricing, id]);
    res.json("DishPricing was updated")
        } catch (err){
        console.error(err.message)
        }
    });

     //Update a dish_type
app.put("/menu/dish_type/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {dish_type} = req.body;
         const updateDishType = await pool.query("UPDATE menu SET dish_type = $1 WHERE dish_id = $2",
    [dish_type, id]);
    res.json("DishType was updated")
        } catch (err){
        console.error(err.message)
        }
    });

//Update a merchandise
app.put("/gift_shop/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {merchandise_name, merchandise_description, merchandise_pricing} = req.body;
         const updateMerchandise = await pool.query("UPDATE gift_shop SET (merchandise_name, merchandise_description, merchandise_pricing) = ($1,$2,$3) WHERE merchandise_id = $4",
    [merchandise_name, merchandise_description, merchandise_pricing, id]);
    res.json("Merchandise was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a merchandise_name
app.put("/gift_shop/merchandise_name/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {merchandise_name} = req.body;
         const updateMerchandiseName = await pool.query("UPDATE gift_shop SET merchandise_name= $1 WHERE merchandise_id = $2",
    [merchandise_name, id]);
    res.json("MerchandiseName was updated")
        } catch (err){
        console.error(err.message)
        }
    });

        //Update a merchandise_description
app.put("/gift_shop/merchandise_description/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {merchandise_description} = req.body;
         const updateMerchandiseDescription = await pool.query("UPDATE gift_shop SET merchandise_description = $1 WHERE merchandise_id = $2",
    [merchandise_description, id]);
    res.json("MerchandiseDescription was updated")
        } catch (err){
        console.error(err.message)
        }
    });

        //Update a merchandise_pricing
app.put("/gift_shop/merchandise_pricing/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {merchandise_pricing} = req.body;
         const updateMerchandisePricing = await pool.query("UPDATE gift_shop SET merchandise_pricing= $1 WHERE merchandise_id = $2",
    [merchandise_pricing, id]);
    res.json("MerchandisePricing was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    
//Update an event reservation
app.put("/event_reservations/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {reservation_name, group_size, phone, email, event_start_time, event_end_time, notes} = req.body;
         const updateEventReservation = await pool.query("UPDATE event_reservations SET (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) = ($1,$2,$3,$4,$5,$6,$7) WHERE event_reservation_id = $8",
    [reservation_name, group_size, phone, email, event_start_time, event_end_time, notes, id]);
    res.json("Event Reservation was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update an event_reservation_name
app.put("/event_reservations/reservation_name/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {reservation_name} = req.body;
         const updateEventReservationName = await pool.query("UPDATE event_reservations SET reservation_name = $1 WHERE event_reservation_id = $2",
    [reservation_name,id]);
    res.json("EventReservationName was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update an event_group_size
app.put("/event_reservations/group_size/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {group_size} = req.body;
         const updateEventGroupSize = await pool.query("UPDATE event_reservations SET group_size = $1 WHERE event_reservation_id = $2",
    [group_size,id]);
    res.json("EventGroupSize was updated")
        } catch (err){
        console.error(err.message)
        }
    });

       //Update an event_phone
app.put("/event_reservations/phone/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {phone} = req.body;
         const updateEventPhone = await pool.query("UPDATE event_reservations SET phone = $1 WHERE event_reservation_id = $2",
    [phone,id]);
    res.json("EventPhone was updated")
        } catch (err){
        console.error(err.message)
        }
    });

     //Update an event_email
app.put("/event_reservations/email/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {email} = req.body;
         const updateEventEmail = await pool.query("UPDATE event_reservations SET email = $1 WHERE event_reservation_id = $2",
    [email,id]);
    res.json("EventEmail was updated")
        } catch (err){
        console.error(err.message)
        }
    });

         //Update an event_start_time
app.put("/event_reservations/event_start_time/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {event_start_time} = req.body;
         const updateEventStartTime = await pool.query("UPDATE event_reservations SET event_start_time = $1 WHERE event_reservation_id = $2",
    [event_start_time,id]);
    res.json("EventStartTime was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update an event_end_time
app.put("/event_reservations/event_end_time/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {event_end_time} = req.body;
         const updateEventEndTime = await pool.query("UPDATE event_reservations SET event_end_time = $1 WHERE event_reservation_id = $2",
    [event_end_time,id]);
    res.json("EventEndTime was updated")
        } catch (err){
        console.error(err.message)
        }
    });

        //Update an event_note
app.put("/event_reservations/notes/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {notes} = req.body;
         const updateEventNotes = await pool.query("UPDATE event_reservations SET notes = $1 WHERE event_reservation_id = $2",
    [notes,id]);
    res.json("EventNotes was updated")
        } catch (err){
        console.error(err.message)
        }
    });
  
  
//Update a table reservation
app.put("/table_reservations/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {reservation_name, reservation_time, group_size, phone, notes} = req.body;
         const updateTableReservation = await pool.query("UPDATE table_reservations SET (reservation_name, reservation_time, group_size, phone, notes) = ($1,$2,$3,$4,$5) WHERE table_reservation_id = $6",
    [reservation_name, reservation_time, group_size, phone, notes, id]);
    res.json("Table Reservation was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a table_reservation_name
app.put("/table_reservations/reservation_name/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {reservation_name} = req.body;
         const updateTableReservationName = await pool.query("UPDATE table_reservations SET reservation_name = $1 WHERE table_reservation_id = $2",
    [reservation_name,id]);
    res.json("TableReservationName was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a table_reservation_time
app.put("/table_reservations/reservation_time/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {reservation_time} = req.body;
         const updateTableReservationTime = await pool.query("UPDATE table_reservations SET reservation_time = $1 WHERE table_reservation_id = $2",
    [reservation_time,id]);
    res.json("TableReservationTime was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a table_group_size
app.put("/table_reservations/group_size/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {group_size} = req.body;
         const updateTableGroupSize = await pool.query("UPDATE table_reservations SET group_size = $1 WHERE table_reservation_id = $2",
    [group_size,id]);
    res.json("TableGroupSize was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update an table_phone
app.put("/table_reservations/phone/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {phone} = req.body;
         const updateTablePhone = await pool.query("UPDATE table_reservations SET phone = $1 WHERE table_reservation_id = $2",
    [phone,id]);
    res.json("TablePhone was updated")
        } catch (err){
        console.error(err.message)
        }
    });

    //Update a table_note
app.put("/table_reservations/notes/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const {notes} = req.body;
         const updateTableNotes = await pool.query("UPDATE table_reservations SET notes = $1 WHERE table_reservation_id = $2",
    [notes,id]);
    res.json("TableNotes was updated")
        } catch (err){
        console.error(err.message)
        }
    });

//Delete a account
app.delete("/account/:id", async (req, res) => {
    try {
         const { id }= req.params;
         const deleteAccount = await pool.query("DELETE FROM account WHERE account_id = $1",[id]);
  res.json("Account was deleted")
        } catch (err){
        console.error(err.message)
        }
    }); 

    //Delete a dish
    app.delete("/menu/:id", async (req, res) => {
        try {
             const { id }= req.params;
             const deleteDish = await pool.query("DELETE FROM menu WHERE dish_id = $1",[id]);
      res.json("Dish was deleted")
            } catch (err){
            console.error(err.message)
            }
        }); 

        //Delete a merchandise
        app.delete("/gift_shop/:id", async (req, res) => {
            try {
                 const { id }= req.params;
                 const deleteMerchandise = await pool.query("DELETE FROM gift_shop WHERE merchandise_id = $1",[id]);
          res.json("Merchandise was deleted")
                } catch (err){
                console.error(err.message)
                }
            }); 

            //Delete an event reservation
            app.delete("/event_reservations/:id", async (req, res) => {
                try {
                     const { id }= req.params;
                     const deleteEventReservation = await pool.query("DELETE FROM event_reservations WHERE event_reservation_id = $1",[id]);
              res.json("Event Reservation was deleted")
                    } catch (err){
                    console.error(err.message)
                    }
                }); 

                //Delete a table reservation
                app.delete("/table_reservations/:id", async (req, res) => {
                    try {
                         const { id }= req.params;
                         const deleteTableReservation = await pool.query("DELETE FROM table_reservations WHERE table_reservation_id = $1",[id]);
                  res.json("Table Reservation was deleted")
                        } catch (err){
                        console.error(err.message)
                        }
                    }); 