import React, { Component } from "react";

//COMPONENTS
import PlantCard from "../components/PlantCard.js";

// CLASS BASED COMPONENT
class Herbs extends Component {
  render() {
    return (
      <main>
        <h2 style={{ margintop: "1px" }}>HERBS</h2>
        <PlantCard name="Herb" description="Adding a herb to the herb page" />
      </main>
    );
  }
}

export default Herbs;
