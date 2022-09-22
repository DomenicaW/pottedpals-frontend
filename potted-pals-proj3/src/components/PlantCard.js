import React from "react";
// INDIVIDUAL PLANT CARD

// STYLING SHEETS 
import "../css-sheets/App.css"
import "../css-sheets/header.css";

function PlantCard(props) {
    const {name, type, care, description} = props;

  return (
    <div>
      <div>
        <img src="" alt="Plant card image"/>
      </div>

      <button>✕</button>

      <h5 className="PlantType"> {props.type} </h5>
      <h3 className="PlantName"> {props.name} </h3>
      {/* <h5>Care: </h5> */}
      <h5 className="PlantDescription"> {props.description}</h5>
    </div>
  );
}

export default PlantCard