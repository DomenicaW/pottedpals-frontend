/* ====================
NAVBAR COMPONENT
==================== */
import React, { Component } from "react";

// IMPORT FOR REACT ROUTER
import { Link } from "react-router-dom";

// STYLING
import "../css-sheets/header.css";

// CLASS BASED COMPONENT
class Navbar extends Component {
  render() {
    return (
      <div className="TopNav">
        <nav>
          {/* <Link to="/about">About Pals</Link> */}
          <Link to="./contact">Contact Us</Link>
          <Link to="./Login">Login</Link>
          <Link to="./Register">Register</Link>
          <Link to="./addNew">Add New Form</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
