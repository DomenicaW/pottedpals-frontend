// import React, { Component } from "react";
import React from "react"
import { useLocation } from  "react-router-dom"


//COMPONENTS
import PlantCard from "../components/PlantCard.js";

// CLASS BASED COMPONENT
// class Flowers extends Component {
  // render() {

  function Flowers(props) {
    const location = useLocation ();
    console.log (props, "props")
    console.log(location, "useLocation Hook")
    const data = location.state?.data;
    
  
    return (
      <main>
        <h2 style={{ margintop: "1px" }}>FLOWERS</h2>
        <PlantCard
          // name="Flowers"
          // description="Adding flower to the flower page"
        />
      </main>
    );
  // }
}

export default Flowers;
