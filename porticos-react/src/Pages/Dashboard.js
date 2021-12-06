//Dashboard Implementation 
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"

const Dashboard = ( {setAuth} ) => {
  const [name1, setName] = useState("");
  const [inputs, setInputs] = useState({
      name: '',
      phone: '',
      group: '',
      time: '',
      message: '',
      Venuename:'',
      Venuephone:'',
      Venueemail:'',
      starttime:'',
      endtime:'',
      Venuegroup:'',
      Venuemessage:'',
      id:''
  });

  const { name, phone, group, time, message, Venuename, Venuephone, Venueemail, starttime, endtime, Venuegroup, Venuemessage, id } = inputs;

  const onNameChange = (e) =>
    setInputs({ [name]: e.target.value });

  const onPhoneChange = (e) =>
    setInputs({ [phone]: e.target.value });
  const onGroupChange = (e) =>
    setInputs({ [group]: e.target.value });
  const onMessageChange = (e) =>
    setInputs({ [message]: e.target.value });
  const onVenueNameChange = (e) =>
    setInputs({ [Venuename]: e.target.value });
  const onVenuePhoneChange = (e) =>
    setInputs({ [Venuephone]: e.target.value });
  const onVenueEmailChange = (e) =>
    setInputs({ [Venueemail]: e.target.value });
  const onStartTimeChange = (e) =>
    setInputs({ [starttime]: e.target.value });
  const onEndTimeChange = (e) =>
    setInputs({ [endtime]: e.target.value });
  const onVenueGroupChange = (e) =>
    setInputs({ [Venuegroup]: e.target.value });
  const onVenueMessageChange = (e) =>
    setInputs({ [Venuemessage]: e.target.value });

  const handleTableUpdate = async (e) => {
    e.preventDefault();
    try {
      const body = { name, phone, group, time, message, Venuename, Venuephone, Venueemail, starttime, endtime, Venuegroup, Venuemessage, id };
      axios({
        method: "PUT",
        url:"/table_reservations/:id",
        data:  JSON.stringify(body)
      }).then((response)=>{
        if (response.data.status === 'success') {
          // Change form box into success message
          alert("Successful Table Update");
        } else if (response.data.status === 'fail') {
          // Change form box into failure message
          // possibly just an error alert()
          alert("Malformed Table Update");
        }
      })
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleVenueUpdate = () => {
    
    try {
      const body = { name, phone, group, time, message, Venuename, Venuephone, Venueemail, starttime, endtime, Venuegroup, Venuemessage, id };
      axios({
        method: "PUT",
        url:"/event_reservations/:id",
        data:  JSON.stringify(body)
      }).then((response)=>{
        if (response.data.status === 'success') {
          // Change form box into success message
          alert("Successful Venue Update");
        } else if (response.data.status === 'fail') {
          // Change form box into failure message
          // possibly just an error alert()
          alert("Malformed Venue Update");
        }
      })
    } catch (err) {
      console.error(err.message);
    }
  };
  const getAllTableReservations = async (e) => {
    e.preventDefault();
    try {
      axios.get('/table_reservations').then(res => {
        const parseData = res.data
        console.log(`GETTING INDEX 0: ${JSON.stringify(parseData[0])}`);
        return parseData;
      })
      
      //setInputs(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };
  const getAllVenueReservations = () => {
    //e.preventDefault();
    
    try {
      axios.get('/event_reservations').then(res => {
        const parseData = res.data
        console.log(`GETTING INDEX 0: ${JSON.stringify(parseData[0])}`);
        return parseData;
      })
      
      //setInputs(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch("/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.Employee_UserName);
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(`VENUE TEST RESPONSE:  ${ getAllVenueReservations()}` );//Table Reservation Display
  console.log(`TABLE TEST RESPONSE:  ${ getAllTableReservations()}` );//Venue Reservation Display
  const logout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      //toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name1}</h2>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
     
    </div>
  );
};

export default Dashboard;
