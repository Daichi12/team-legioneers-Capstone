//Dashboard Implementation 
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"
var venueVar = null;
var tableVar = null;
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
        url:"http://localhost:5000/table_reservations/:id",
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
        url:"http://localhost:5000/event_reservations/:id",
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
  const getAllTableReservations = () => {
    //e.preventDefault();
   
      
      return axios.get('http://localhost:5000/table_reservations').then(res => {
        const parseData = res.data
        console.log(`GETTING INDEX 0: ${JSON.stringify(parseData[0])}`);
        return res.data
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      })
       
      //setInputs(parseData);
   
  };
  const getAllVenueReservations = () => {
    //e.preventDefault();
    
    return axios.get('http://localhost:5000/table_reservations').then(res => {
        const parseData = res.data
        console.log(`GETTING INDEX 0: ${JSON.stringify(parseData[0])}`);
        return res.data
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      })
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.Employee_UserName);
    } catch (err) {
      console.error(err.message);
    }
  };
  const venuePrint = async () =>{
    const parseData = await getAllVenueReservations();
    //console.log(parseData)
    venueVar = JSON.stringify(parseData)
  }
  const tablePrint = async () =>{
    const parseData = await getAllTableReservations();
    //console.log(parseData)
    tableVar = JSON.stringify(parseData)
  }
  venuePrint();
  tablePrint();
  console.log(`TABLE TEST RESPONSE:  ${ tableVar}` );//Table Reservation Display
  console.log(`VENUE TEST RESPONSE:  ${ venueVar}` );//Venue Reservation Display
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
  //var PostData = getAllTableReservations();
  //console.log(getAllTableReservations());
  return (
    <div>
      <h1 className="mt-5">Dashboard</h1>
      <h2>Welcome {name1}</h2>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
      

 {/* {tableVar.map((postDetail, index) => {return <h6> ID: {postDetail.reservation_id}, Name: {postDetail.reservation_name}, Time: {postDetail.reservation_time}, group size: {postDetail.group_size}, phone: {postDetail.phone},  </h6>})}   */}
    </div>
  );
};

export default Dashboard;