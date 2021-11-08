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
  //document..body.classList.add("home page template-slider color-custom style-default layout-full-width nice-scroll-on button-stroke no-content-padding no-shadows header-split minimalist-header-no sticky-header sticky-tb-color ab-hide subheader-both-center menuo-no-borders footer-copy-center mobile-tb-left mobile-side-slide mobile-mini-mr-lc mobile-header-mini mobile-sticky");
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