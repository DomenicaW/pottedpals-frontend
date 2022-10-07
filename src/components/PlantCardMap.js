import React, { Component } from "react"


class PlantCardMap extends Component {
    constructor(props) {
        super(props); 
        this.state = {};
    }

    render() {
        return (
        {this.state.plants.map(plant => (
            <PlantCard
              key={plant._id}
              img={plant.img}
              name={plant.name}
              type={plant.type}
              description={plant.description}
            ></PlantCard>
         ) }

         export default PlantCardMap;