/* ====================
HEADER COMPONENT
==================== */
// import React from "react";
import React, { Component, useState } from "react";

// import React, { Component } from "react";

// IMPORT FOR REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import { App } from "../App.js"

// COMPONENT
//COMPONENTS
import Navbar from "./Navbar.js";

// STYLING
import "../css-sheets/header.css";

// CLASS BASED COMPONENT
function Header () {
//  render () {
  // console.log ("plants", {plants});
  const [data, setData] = useState({
    name: ""
  });
  return (
    <div>
  
      <div className="TopStatusBar">
      <Navbar />
      </div>
      <div className="Title">
    
        <h1>POTTED PALS</h1>
        <nav className="Navbar">
          <Link to="/succulents">SUCCULENTS</Link> 
          <Link to="./flowers">FLOWERS</Link>
          <Link to="./houseplants">HOUSE PLANTS</Link>
          <Link to="./herbs">HERBS</Link>         
        </nav>
      </div>
    </div>
  );
// }
  
 }

  // const location = useLocation ()
  // console.log("Location", location )
 



export default Header;