import React, { useState } from "react";
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import AboutUs from './Pages/AboutUs';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuCategories from './Pages/MenuCategories';
import items from './Pages/MenuData';
import items2 from './Pages/merchandisedata';
import Merchandise from "./Pages/Merchandise";
//import { render } from "react-dom";

const allCategories = [...new Set(items.map((item) => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items)

  const [merchandiseItems] = useState(items2)


  const [categories] = useState(allCategories)


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (    
    <Router>
        <Routes> 
          <Route path="" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
        
          <Route path="/Menu" className="Menu" 
        
          element={<> <Menu items={menuItems}/> 
          
          <MenuCategories categories={categories} filterItems={filterItems}/> </> } />

          <Route path="/Merchandise" className="Merchandise" element={<> <Merchandise items2={merchandiseItems}/> </>}/>
       
          <Route path="/AboutUs" element={<AboutUs/>} />

          <Route path="/Events" element={<Events/>} />

          <Route path="/Contact" element={<Contact/>} />
          
        </Routes>

</Router>
  );
}
export default App;
