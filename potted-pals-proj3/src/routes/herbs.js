import React from "react";

//COMPONENTS
import PlantCard from "../components/PlantCard.js";


function Herbs() {
    return (
      <main>
        <h2 style={{margintop: "1px"}}>HERBS</h2>
        <PlantCard name="Herb" description="Adding a herb to the herb page" />
      </main>
    );
  }

  export default Herbs