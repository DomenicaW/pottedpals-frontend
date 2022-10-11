import React, { Component } from "react";
import { Route, Routes, Navlink, Outlet, Link } from "react-router-dom";

import PlantCard from "../components/PlantCard.js";
import AddNew from "../page-routes/AddNew.js";

// Styling
import "../css-sheets/App.css";
import "../css-sheets/plantCard.css";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://potted-pals-frontend.herokuapp.com";
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
    fetch(process.env.REACT_APP_BACKEND_URL)
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

  handleAddPlant = (plant) => {
    const copyPlants = [...this.state.plants];
    copyPlants.unshift(plant);
    this.setState({
      plants: copyPlants,
      _id: "",
      name: "",
      type: "",
      caretaking: "",
      description: "",
      img: "",
    });
  };

  //   handleDelete = (id) => {
  // 	fetch(baseURL + id, {
  // 		method: 'DELETE',
  // 		// credentials: "include"
  // 	}).then( response => {
  // 	const findIndex = this.state.plants.findIndex(
  // 				(plant) => plant._id === id
  // 			);
  //   const copyPlants = [...this.state.plants];
  // 		 copyPlants.splice(findIndex, 1);
  // 		 this.setState({ plants: copyPlants });
  // 	})
  // }

  // handleDelete = id => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL} + plant._id`, {
  //     method: "DELETE",
  //   }).then(response => {
  //     const findIndex = this.state.plants.findIndex(plant => plant._id === id);
  //     const copyPlants = [...this.state.plants];
  //     copyPlants.splice(findIndex, 1);
  //     this.setState({ plants: copyPlants });
  //   });
  // };






  handleDelete = (id) => {
    // event.preventDefault();
    console.log("hitting this route" , id );
    fetch(`${process.env.REACT_APP_BACKEND_URL}`  + '/'  +id, {
      // fetch(baseURL + "/plants" + id, {
      method: "DELETE",

    })
    .then(response => {
      const findIndex = this.state.plants.findIndex(plant => plant._id === id);
      const copyPlants = [...this.state.plants];
      copyPlants.splice(findIndex, 1);
      this.setState({ plants: copyPlants });

    });

  };

  render() {
    console.log(this.state.plants);
    return (
      <>
        {this.state.plants.map(plant => (
          <>
          <PlantCard
            key={plant._id}
            img={plant.img}
            name={plant.name}
            type={plant.type}
            caretaking={plant.caretaking}
            description={plant.description}
          ></PlantCard>
           <button className="DButton" onClick={() => this.handleDelete(plant._id)}>Delete {plant.name}</button>
          {/* <button>WHERE IS THIS</button>  */}
          </>




        ))}
        {/* <AddNew handleAddPlant={this.handleAddPlant}/> */}
      </>
    );
  }
}

export default AllPlants;
