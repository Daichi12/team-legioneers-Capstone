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

toast.configure();

function App() {

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:3000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };


  return (
    
    <Router>
   
        <Routes> 
          <Route path="" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          
          
          <Route path="/login" 
          render={props =>
            isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
          element={<Dashboard/>} />
         
         
          <Route path="/dashboard" 
          render={props =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
          element={<Login/>} />


          <Route path="/register" 
           render={props =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
          element={<Dashboard/>} />

          
        </Routes>

</Router>

  );
}
export default App;