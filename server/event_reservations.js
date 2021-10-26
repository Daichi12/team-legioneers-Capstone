const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Event Reservations Routes

//Create an Event Reservation
app.post("/event_reservations", async (req, res)=> {
    try{
        const newEventReservation = await pool.query("INSERT INTO event_reservations (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *", 
        [req.body.Reservation_Name, req.body.Group_Size, req.body.Phone, req.body.Email, req.body.Event_Start_Time, req.body.Event_End_Time, req.body.Notes]);
    res.json(newEventReservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get all event reservations
app.get("/event_reservations", async(req, res) =>{
    try {
        const allEventReservations = await pool.query("SELECT * FROM event_reservations");
        res.json(allEventReservations.rows);
     }
        catch(err){
            console.error(err.message);
        }
    });
//get an event reservation
app.get("/event_reservations/:id", async (req, res) => {
    try{
        const event_reservation = await pool.query("SELECT * FROM event_reservations WHERE event_reservation_id = $1", [req.body.id]);
        res.json(event_reservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//update an event reservation
app.put("/event_reservations/:id", async (req, res) => {
    try {
         
         const updateEventReservation = await pool.query("UPDATE event_reservations SET (reservation_name, group_size, phone, email, event_start_time, event_end_time, notes) = ($1,$2,$3,$4,$5,$6,$7) WHERE event_reservation_id = $8",
    [req.body.Reservation_Name, req.body.Group_Size, req.body.Phone, req.body.Email, req.body.Event_Start_Time, req.body.Event_End_Time, req.body.Notes, req.body.id]);
    res.json("Event Reservation was updated");
        } catch (err){
        console.error(err.message);
        }
    });

//update event reservation name
app.put("/event_reservations/reservation_name/:id", async (req, res) => {
    try {
         const updateEventReservationName = await pool.query("UPDATE event_reservations SET reservation_name = $1 WHERE event_reservation_id = $2",
    [req.body.Reservation_Name,req.body.id]);
    res.json("EventReservationName was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update event reservation group size
app.put("/event_reservations/group_size/:id", async (req, res) => {
    try {
         const updateEventGroupSize = await pool.query("UPDATE event_reservations SET group_size = $1 WHERE event_reservation_id = $2",
    [req.body.Group_Size,req.body.id]);
    res.json("EventGroupSize was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update event reservation Phone
app.put("/event_reservations/phone/:id", async (req, res) => {
    try {
         const updateEventPhone = await pool.query("UPDATE event_reservations SET phone = $1 WHERE event_reservation_id = $2",
    [req.body.Phone,req.body.id]);
    res.json("EventPhone was updated");
        } catch (err){
        console.error(err.message);
        }
    });

//update event reservation Email
app.put("/event_reservations/email/:id", async (req, res) => {
    try {
         const updateEventEmail = await pool.query("UPDATE event_reservations SET email = $1 WHERE event_reservation_id = $2",
    [req.body.Email,req.body.id]);
    res.json("EventEmail was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update event reservation start time
app.put("/event_reservations/event_start_time/:id", async (req, res) => {
    try {
         const updateEventStartTime = await pool.query("UPDATE event_reservations SET event_start_time = $1 WHERE event_reservation_id = $2",
    [req.body.Event_Start_Time,req.body.id]);
    res.json("EventStartTime was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update event reservation end time
app.put("/event_reservations/event_end_time/:id", async (req, res) => {
    try {
         const updateEventEndTime = await pool.query("UPDATE event_reservations SET event_end_time = $1 WHERE event_reservation_id = $2",
    [req.body.Event_End_Time,req.body.id]);
    res.json("EventEndTime was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//update event reservation notes
app.put("/event_reservations/notes/:id", async (req, res) => {
    try {
         const updateEventNotes = await pool.query("UPDATE event_reservations SET notes = $1 WHERE event_reservation_id = $2",
    [req.body.Notes,req.body.id]);
    res.json("EventNotes was updated");
        } catch (err){
        console.error(err.message);
        }
    });
//delete an event reservation
app.delete("/event_reservations/:id", async (req, res) => {
    try {
         const deleteEventReservation = await pool.query("DELETE FROM event_reservations WHERE event_reservation_id = $1",[req.body.id]);
  res.json("Event Reservation was deleted");
        } catch (err){
        console.error(err.message);
        }
    }); 