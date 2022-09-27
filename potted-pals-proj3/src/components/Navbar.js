/* ====================
NAVBAR COMPONENT
==================== */
import React from "react";

// IMPORT FOR REACT ROUTER
import { Link } from "react-router-dom"

// STYLING
import "../css-sheets/header.css";

// Define our Header component
function Navbar() {
  return (
    <div class="TopNav">
      <nav >  
        {/* <Link to="/about">About Pals</Link> */}
        <Link to="./contact">Contact Us</Link>
        <Link to="./Login">Login</Link>
        <Link to="./Register">Register</Link>
        <Link to="./addNew">Add New Form</Link>
      </nav>
    </div>
  );
}

export default Navbar;