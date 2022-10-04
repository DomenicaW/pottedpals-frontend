/* ====================
HEADER COMPONENT
==================== */
// import React from "react";
import React, { Component, useState } from "react";

// import React, { Component } from "react";

// IMPORT FOR REACT ROUTER
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import { App } from "../App.js";
>>>>>>> 49bdd3d193a9300765f27e64a8def998bb64359c

//COMPONENTS


// STYLING
import "../css-sheets/header.css";

// CLASS BASED COMPONENT
function Header() {
  //  render () {
  // console.log ("plants", {plants});
  const [data, setData] = useState({
    name: "",
  });
  return (
    <div>
<<<<<<< HEAD

=======
>>>>>>> 49bdd3d193a9300765f27e64a8def998bb64359c
      <div className="TopStatusBar">
    
      </div>
      <div className="Title">
<<<<<<< HEAD

        <h1>POTTED PALS</h1>
        <nav className="Navbar">
          <Link to="/succulents">SUCCULENTS</Link>
          <Link to="./flowers">FLOWERS</Link>
          <Link to="./houseplants">HOUSE PLANTS</Link>
          <Link to="./herbs">HERBS</Link>
=======
        <h1>POTTED PALS</h1>
        <nav className="Navbar">
          <ul>
            <Link to="/succulents">SUCCULENTS</Link>
            <Link to="./flowers">FLOWERS</Link>
            <Link to="./houseplants">HOUSE PLANTS</Link>
            <Link to="./herbs">HERBS</Link>
          </ul>
>>>>>>> 49bdd3d193a9300765f27e64a8def998bb64359c
        </nav>
      </div>
    </div>
  );
  // }
}

<<<<<<< HEAD

 }

  // const location = useLocation ()
  // console.log("Location", location )




=======

// const location = useLocation ()
// console.log("Location", location )

>>>>>>> 49bdd3d193a9300765f27e64a8def998bb64359c
export default Header;
