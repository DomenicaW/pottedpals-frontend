import React, { Component } from "react";
import { Outlet } from "react-router-dom";

//  Keeping the below in to remind of Link import in case there are issues in future
//  import { Outlet, Link } from "react-router-dom";

// Styling
import "./css-sheets/App.css";

// COMPONENTS
import Header from "./components/Header.js";
import HousePlants from "./page-routes/HousePlants.js";
import PlantCard from "./components/PlantCard.js";

//ADDING baseURL
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "heroku backend url";
}
console.log("current base url:", baseURL);

// CLASS BASED COMPONENT
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
    };
  }

  // componentDidMount
  componentDidMount() {
    this.getPlants();
  }



   // This is a method because it is associated with a class
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

  render() {   
    return (
      <div className="App">

        <Header />
        {this.state.plants.map((plant)=>
         <PlantCard key={plant._id} img={plant.img} name ={plant.name} type={plant.type} description={plant.description}></PlantCard>
)}
        
        <Outlet />
      </div>
    );
  }
}

export default App;

