import React from "react";

// STYLING SHEETS 
import "../css-sheets/App.css"
import "../css-sheets/plantCard.css"

function PlantCard(props) {
    const { image, name, type, care, description} = props;

  return (
    <div className="Card">
      <div className="ImgBox">
        <img src={`${process.env.PUBLIC_URL}mock-images/${props.image}`} alt="Plant card image"/>
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