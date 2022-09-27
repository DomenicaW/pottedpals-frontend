import React from "react";

//COMPONENTS
import PlantCard from "../components/PlantCard.js";

function Flowers() {
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

export default Flowers;
