/* ====================
CONTACT COMPONENT
==================== */
// import React from "react";
import React, { Component } from "react";

// STYLING
import "../css-sheets/App.css";
import "../css-sheets/contactCard.css";

// CLASS BASED COMPONENT
class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ContactDiv">
        <div className="ImgCircle">
          <a href={this.props.link} target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}mock-images/Asset-person.png`}
              alt="avatar"
            />
          </a>
        </div>

        <div className="ContactText">
          <h3 className="ContactName"> {this.props.name} </h3>
          <h3 className="ContactCardTitle"> {this.props.title} </h3>
          <h3 className="">{this.props.links}</h3>
          <a href={this.props.link} target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}mock-images/${this.props.image}`}
              alt="linkedin-logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ContactCard;
