import React, { Component } from "react";
import { Route, Routes, NavLink, Outlet, Link } from "react-router-dom";

//  Keeping the below in to remind of Link import in case there are issues in future
//  import { Outlet, Link } from "react-router-dom";

// Styling
import "./css-sheets/App.css";
import "./css-sheets/plantCard.css";

// COMPONENTS
// components associated with top navigation bar
import TopNavBar from "./components/TopNavBar.js";
import Contact from "./page-routes/Contact.js";
import AddNew from "./page-routes/AddNew.js";
import YourGarden from "./page-routes/YourGarden.js";
// components associated with header which includes the indivudal plant pages
import Header from "./components/Header.js";
import Succulents from "./page-routes/Succulents.js";
import SucculentShow from "./page-routes/SucculentShow.js";
import Flowers from "./page-routes/Flowers.js";
import HousePlants from "./page-routes/HousePlants.js";

import Herbs from "./page-routes/Herbs.js";

import NotFound from "./page-routes/NotFound.js";

import PlantCard from "./components/PlantCard.js";
import AllPlants from "./page-routes/AllPlants.js";
//API component:
import Youtube from "./page-routes/Youtube.js";

// UNUSED COMPONENTS - BUT MAY ADD LATER IF THERE IS TIME
// import About from './page-routes/About.js'
// import Login from "./page-routes/Login.js";
// import Register from "./page-routes/Register.js";

// //ADDING baseURL
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://potted-pals-frontend.herokuapp.com/plants";
}
console.log("current base url:", baseURL);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      succulent: [],
      herb: [],
      flowers: [],
    };
  }

  // // componentDidMount
  // componentDidMount() {
  //   this.getPlants();
  // }

  // getPlants = () => {
  //   fetch(baseURL + "/plants")
  //     .then(res => {
  //       if (res.status === 200) {
  //         return res.json();
  //       } else {
  //         return [];
  //       }
  //     })
  //     .then(data => {
  //       console.log("data:", data);
  //       this.setState({ plants: data.plants });
  //     });
  // };

  // sortPlant = () => {
  //  const plantsArray = this.state.plants
  //   //   if (plantsArray.type === "succulent")
  //       console.log("plants Array", this.state);
  // };

  // sortSucc() {
  //   fetch(baseURL = "/plants")
  //   .then (res => {
  //     if (res.status === 200) {
  //       return res.json();
  //   } else{
  //     return []
  //    }
  // })
  // .then(succulentData => {
  //   // if (plant.type === succulent)
  //   console.log ("succluent", succulentData)
  //   // this.setState({ succulent })

  // })}
  //   this.setState({ succulents: [...this.state.plants, newSucculent]})
  //   console.log ("Suculent function", this.state.succulent )
  // }
  // sortPlant = () => {
  //   const plantList = this.state.plants;
  //   console.log("type test", plantList);
  //   // if (type === succulent)
  //   // if (type === flowers),
  //   // if (type === herb),
  //   // if
  //   // push into array
  //   // else if
  //   // else
  // };
  // thiis is what should go in the element that connects to the routes
  // succulentArr = {{succulent}}

  //HANDLE ADD AND DELETE FUNCTIONS
  handleAddPlant = (plant) => {
		const copyPlants = [...this.state.plants];
		copyPlants.unshift(plant);
		this.setState({ plants: copyPlants });
	};

  handleDelete = (id) => {
		fetch(baseURL + id, {
			method: 'DELETE',
			credentials: "include"
		}).then( res => {
			const copyPlants = [...this.state.plants];
			const findIndex = this.state.plants.findIndex(
					(plant) => plant._id === id
				);
			 copyPlants.splice(findIndex, 1);
			 this.setState({ plants: copyPlants });
		})
	}


  render() {
    // const plantList = this.state.plants;
    // console.log("Plantlist?", plantList);
    console.log(this.state.plants);

    return (
      <>
        <TopNavBar />
        <Header />

        <Routes>
          <Route path="/" element={<AllPlants />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addNew" element={<AddNew />} />
          <Route path="/yourGarden" element={<YourGarden />} />
          <Route path="/succulents" element={<Succulents />} />
          <Route path="/succulent/:id" element={<SucculentShow />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/housePlants" element={<HousePlants />} />
          <Route path="/herbs" element={<Herbs />} />
          <Route path="/ytapi" element={<Youtube />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* 
        {this.state.plants.map(plant => (
          <PlantCard
            key={plant._id}
            img={plant.img}
            name={plant.name}
            type={plant.type}
            description={plant.description}
          ></PlantCard>
        ))} */}
      </>
    );
  }
}

export default App;
