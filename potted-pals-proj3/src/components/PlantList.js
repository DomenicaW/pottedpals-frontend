import React, { Component } from "react";

// STYLE SHEETS
import "../css-sheets/plantCard.css";

// IMPORTED COMPONENTS
import PlantCard from "./PlantCard.js";

// CLASS BASED COMPONENT
class PlantList extends Component {
  render() {
    return (
      <div className="PlantList">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
    );
  }
}

export default PlantList;
