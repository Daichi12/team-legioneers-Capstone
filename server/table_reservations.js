const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Table Reservations Routes

//Create a table Reservation
app.post("/table_reservations", async (req, res)=> {
    try{
        
        const newTableReservation = await pool.query("INSERT INTO table_reservations (reservation_name, reservation_time, group_size, phone, notes) VALUES($1,$2,$3,$4,$5) RETURNING *", 
        [req.body.Reservation_Name, req.body.Reservation_Time, req.body.Group_Size, req.body.Phone, req.body.Notes]);
    res.json(newTableReservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get all table reservations
app.get("/table_reservations", async(req, res) =>{
    try {
        const allTableReservations = await pool.query("SELECT * FROM table_reservations");
        res.json(allTableReservations.rows);
     }
        catch(err){
            console.error(err.message);
        }
    });
//get a table reservation
app.get("/table_reservations/:id", async (req, res) => {
    try{
        const table_reservation = await pool.query("SELECT * FROM table_reservations WHERE table_reservation_id = $1", [req.body.id]);
        res.json(table_reservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update a table reservation
app.put("/table_reservations/:id", async (req, res) => {
    try {
         
         const updateTableReservation = await pool.query("UPDATE table_reservations SET (reservation_name, reservation_time, group_size, phone, notes) = ($1,$2,$3,$4,$5) WHERE table_reservation_id = $6",
    [req.body.Reservation_Name, req.body.Reservation_Time, req.body.Group_Size, req.body.Phone, req.body.Notes, req.body.id]);
    res.json("Table Reservation was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update table reservation name
app.put("/table_reservations/reservation_name/:id", async (req, res) => {
    try {
         const updateTableReservationName = await pool.query("UPDATE table_reservations SET reservation_name = $1 WHERE table_reservation_id = $2",
    [req.body.Reservation_Name,req.body.id]);
    res.json("TableReservationName was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update table reservation time
app.put("/table_reservations/reservation_time/:id", async (req, res) => {
    try {
         
         const updateTableReservationTime = await pool.query("UPDATE table_reservations SET reservation_time = $1 WHERE table_reservation_id = $2",
    [req.body.Reservation_Time,req.body.id]);
    res.json("TableReservationTime was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update group size
app.put("/table_reservations/group_size/:id", async (req, res) => {
    try {
         
         const updateTableGroupSize = await pool.query("UPDATE table_reservations SET group_size = $1 WHERE table_reservation_id = $2",
    [req.body.Group_Size,req.body.id]);
    res.json("TableGroupSize was updated")
        } catch (err){
        console.error(err.message);
        }
    });
//update phone
app.put("/table_reservations/phone/:id", async (req, res) => {
    try {
         const updateTablePhone = await pool.query("UPDATE table_reservations SET phone = $1 WHERE table_reservation_id = $2",
    [req.body.Phone,req.body.id]);
    res.json("TablePhone was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update notes
app.put("/table_reservations/notes/:id", async (req, res) => {
    try {
         const updateTableNotes = await pool.query("UPDATE table_reservations SET notes = $1 WHERE table_reservation_id = $2",
    [req.body.Notes,req.body.id]);
    res.json("TableNotes was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//delete table reservation
app.delete("/table_reservations/:id", async (req, res) => {
    try {
         const deleteTableReservation = await pool.query("DELETE FROM table_reservations WHERE table_reservation_id = $1",[req.body.id]);
  res.json("Table Reservation was deleted");
        } catch (err){
        console.error(err.message);
        }
    }); 