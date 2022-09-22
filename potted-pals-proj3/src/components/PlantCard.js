// INDIVIDUAL PLANT CARDS

import React from "react";

function PlantCard() {
  return (
    <div>
      <div></div>

      <button>✕</button>

      <h5 className="PlantType"> Name </h5>
      <h3 className="PlantName"> Type </h3>
      {/* <h5>Care: </h5> */}
      <h5 className="PlantDescription"> Description</h5>
    </div>
  );
}

export default PlantCard