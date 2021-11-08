//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
    </Router>
  );
}
export default App;