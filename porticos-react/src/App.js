//import logo from './logo.svg';
import React, { Fragment, useState, useEffect } from "react";
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

//toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   const setAuth = (boolean) => {
     setIsAuthenticated(boolean);
   };
  async function checkAuthenticated(){
    try {
      const res = await fetch("http://localhost:5000/account/is_verified", {
        method: "GET",
        headers: {token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  
  


  return (
   
   <Router>
        <Routes> 
          <Route path="" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          
          

          <Route exact path="/login" 
          element={!isAuthenticated?
          (<Login setAuth={setAuth}/>):
          (<Navigate to="/dashboard"/>) } />
         
         
          <Route exact path="/dashboard" 
          element={isAuthenticated?
          (<Dashboard setAuth={setAuth}/>):
          (<Navigate to="/login"/>)} />


          <Route exact path="/register" 
          element={!isAuthenticated?
          (<Register setAuth={setAuth}/>):
          (<Navigate to="/dashboard"/>)} />

          
        </Routes>

</Router>
  );
}
export default App;