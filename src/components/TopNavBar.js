/* ====================
NAVBAR COMPONENT
==================== */
import React, { Component } from "react";

// IMPORT FOR REACT ROUTER
import { Link } from "react-router-dom";

// STYLING
import "../css-sheets/topNavBar.css";

// CLASS BASED COMPONENT
class Navbar extends Component {
  render() {
    return (
      <div className="TopNav">
        <nav>
          <ul>
            {/* <Link to="/about">About Pals</Link> */}
            <Link className="Link" to="./contact">Contact Us</Link>
            <Link to="./ytapi">Click Here For Calm</Link>
            {/* <Link to="./Register">Register</Link> */}
            <Link className="Link" to="./addNew">Add New Form</Link>
            <Link to="./yourGarden">Your Garden</Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
