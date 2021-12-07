//Dashboard Implementation 
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"

var venueVar = [];
var tableVar = [];

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
  const getAllTableReservations = () => {
    //e.preventDefault();
   
      
      return axios.get('table_reservations').then(res => {
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
    
    return axios.get('event_reservations').then(res => {
        const parseData = res.data
        console.log(`GETTING INDEX 0: ${JSON.stringify(parseData[0])}`);
        return res.data
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      })
  };
  
  const deleteTableReservationById = async id => {
    await axios.delete('table_reservations/${id}')
  }
  const deleteEventReservationById = async id => {
    await axios.delete('event_reservations/${id}')
  }

  const deleteTableReservations = async () => {
    await axios.delete('table_reservations')
  }
  const deleteEventReservations = async () => {
    await axios.delete('event_reservations')
  }

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
  const venuePrint = async () =>{
    const parseData = await getAllVenueReservations();
    //console.log(parseData)
    venueVar = parseData;
  }
  const tablePrint = async () =>{
    const parseData = await getAllTableReservations();
    //console.log(parseData)
    tableVar = parseData;
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
 
  return (
    <div>
    <center>  <h1 className="mt-5" style={{textDecorationLine: 'underline',fontWeight: 'bold', fontStyle: 'italic', marginBottom:'120px' }}>Dashboard</h1> </center>
    
      <button onClick={e => logout(e)} className="btn-btn-primary">
      <h3 style={{textDecorationLine: 'underline',fontWeight: 'bold', fontStyle: 'italic' }}>  Log Out </h3>
      </button>
    <center>  <h2 style={{textDecorationLine: 'underline',fontWeight: 'bold', fontStyle: 'italic', marginBottom:'50px'}}> Table Reservations </h2> </center>
      <table>
        <tbody>
          <tr>
            
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}> ID </th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Name</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Group Size</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Phone</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Notes</th>
            
          </tr>

          {tableVar.map((tableVar, index) => (
            <tr key= {index}>
             
         <td style={{backgroundColor:"#98dace"}}> {tableVar.reservation_id} </td> 
         <td style={{backgroundColor:"#98dace"}}> {tableVar.reservation_name} </td>
         <td style={{backgroundColor:"#98dace"}}> {tableVar.group_size} </td>
         <td style={{backgroundColor:"#98dace"}}> {tableVar.phone} </td>
         <td style={{backgroundColor:"#98dace"}}> {tableVar.notes} </td>
         
        </tr>
          ))}
        </tbody>
      </table>

      <div>
      <center>  <h2 style={{textDecorationLine: 'underline',fontWeight: 'bold', fontStyle: 'italic', marginTop:'75px', marginBottom:'50px' }}> Venue Reservations </h2> </center>
      <table>
        <tbody>
          <tr>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>ID</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Name</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Group Size</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Phone</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Email</th>
            <th style={{backgroundColor:"rgba(83, 83, 83, 0.185)"}}>Notes</th>
            
          </tr>

          {venueVar.map((venueVar, index) => (
            <tr key= {index}>
         <td style={{backgroundColor:"#98dace"}}> {venueVar.reservation_id} </td> 
         <td style={{backgroundColor:"#98dace"}}> {venueVar.reservation_name} </td>
         <td style={{backgroundColor:"#98dace"}}> {venueVar.group_size} </td>
         <td style={{backgroundColor:"#98dace"}}> {venueVar.phone} </td>
         <td style={{backgroundColor:"#98dace"}}> {venueVar.email} </td>
         <td style={{backgroundColor:"#98dace"}}> {venueVar.notes} </td>
         
        </tr>
          ))}
        </tbody>
      </table>

      </div>

    </div>
  );
};

export default Dashboard;
