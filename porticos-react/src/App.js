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
import Payment from "./Pages/Payment";
import MenuCategories from './Pages/MenuCategories';
import items from './Pages/MenuData';
import items2 from './Pages/merchandisedata';
import Merchandise from "./Pages/Merchandise";
import { render } from "react-dom";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

//toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   const setAuth = (boolean) => {
     setIsAuthenticated(boolean);
   };
  async function checkAuthenticated(){
    try {
      const res = await fetch("/account/is_verified", {
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

  const [menuItems, setMenuItems] = useState(items)
  const [merchandiseItems, setMerchandiseItems] = useState(items2)
  const [categories, setCategories] = useState(allCategories)

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
          
          <Route path="/Payment" element={<Payment/>} />

          <Route exact path="/login_porticos1606" 
          element={!isAuthenticated?
          (<Login setAuth={setAuth}/>):
          (<Navigate to="/dashboard"/>) } />
         
         
          <Route exact path="/dashboard" 
          element={isAuthenticated?
          (<Dashboard setAuth={setAuth}/>):
          (<Navigate to="/login_porticos1606"/>)} />


          <Route exact path="/register_porticos1606" 
          element={!isAuthenticated?
          (<Register setAuth={setAuth}/>):
          (<Navigate to="/dashboard"/>)} />
    
        </Routes>

</Router>
  );
}
export default App;