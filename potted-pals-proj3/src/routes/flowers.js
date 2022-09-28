import React, { Component } from "react";

//COMPONENTS
import PlantCard from "../components/PlantCard.js";

// CLASS BASED COMPONENT
class Flowers extends Component {
  render() {
    return (
      <main>
        <h2 style={{ margintop: "1px" }}>FLOWERS</h2>
        <PlantCard
          name="Flowers"
          description="Adding flower to the flower page"
        />
      </main>
    );
  }
}

export default Flowers;
