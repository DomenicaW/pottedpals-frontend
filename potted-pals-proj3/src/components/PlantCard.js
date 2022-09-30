import React, { Component } from "react";

// STYLING SHEETS
import "../css-sheets/App.css";
import "../css-sheets/plantCard.css";

// CLASS BASED COMPONENT
class PlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Card">
        <div className="ImgBox">
          <img
            src={`${process.env.PUBLIC_URL}mock-images/${this.props.image}`}
            alt="Plant card"
          />
        </div>

        <button>✕</button>

        <h5 className="PlantType"> {this.props.type} </h5>
        <h3 className="PlantName"> {this.props.name} </h3>
        {/* <h5>Care: </h5> */}
        <h5 className="PlantDescription"> {this.props.description}</h5>
      </div>
    );
  }
}

export default PlantCard;
