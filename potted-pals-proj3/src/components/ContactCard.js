/* ====================
CONTACT COMPONENT
==================== */
import React from "react";

// STYLING
import "../css-sheets/App.css";
import "../css-sheets/contactCard.css";

function ContactCard(props) {
  const { avatar, name, title, link } = props;

  return (
    <div className="ContactDiv">
      <div className="ImgCircle">
        <a href={props.link} target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}mock-images/Asset-person.png`}
            alt="avatar"
          />
        </a>
      </div>

      <div className="ContactText">
        <h3 className="ContactName"> {props.name} </h3>
        <h3 className="ContactCardTitle"> {props.title} </h3>
        <h3 className="">{props.links}</h3>
        <a href={props.link} target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}mock-images/${props.image}`}
            alt="linkedin-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
