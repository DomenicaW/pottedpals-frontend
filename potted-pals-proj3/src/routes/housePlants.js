import React, { Component } from "react";

// STYLING
import "../css-sheets/plantCard.css";
// import "../css-sheets/plantList.css"

// COMPONENTS
import PlantCard from "../components/PlantCard.js";

// CLASS BASED COMPONENT
class HousePlants extends Component {
  render() {
    return (
      <main>
        <h2 style={{ margintop: "1px" }}>HOUSEPLANTS</h2>
        <PlantCard
          name="Testing"
          description="Just testing that this is how you import something? Looks like it is working."
        />
      </main>
    );
  }
}


export default HousePlants;
