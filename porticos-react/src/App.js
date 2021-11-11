//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Payment from "./Pages/Payment";



toast.configure();
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
        <Routes> 
          <Route path="" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Contact" element={<Contact/>} />
<<<<<<< Updated upstream
=======
          <Route path="/Payment" element={<Payment/>} />
          
          
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

          
>>>>>>> Stashed changes
        </Routes>
    </Router>
  );
}
export default App;