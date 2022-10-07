import React, { Component } from "react";
import { Route, Routes, Navlink, Outlet, Link } from "react-router-dom";

import PlantCard from "../components/PlantCard.js";

// Styling
import "../css-sheets/App.css";
import "../css-sheets/plantCard.css";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://potted-pals-frontend.herokuapp.com/plants";
}
console.log("current base url:", baseURL);

class AllPlants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      succulent: [],
      herb: [],
      flowers: [],
    };
  }

  getPlants = () => {
    fetch(baseURL + "/plants")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then(data => {
        console.log("data:", data);
        this.setState({ plants: data.plants });
      });
  };

  componentDidMount() {
    this.getPlants();
  }

  render() {
    console.log(this.state.plants);
    return (
      <>
        {this.state.plants.map(plant => (
          <PlantCard
            key={plant._id}
            img={plant.img}
            name={plant.name}
            type={plant.type}
            description={plant.description}
          ></PlantCard>
        ))}
      </>
    );
  }
}

export default AllPlants;
