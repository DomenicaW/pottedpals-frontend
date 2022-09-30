import { Outlet } from "react-router-dom";
import React, { Component } from "react";

//  Keeping the below in to remind of Link import in case there are issues in future
//  import { Outlet, Link } from "react-router-dom";

// Styling
import "./css-sheets/App.css";

// COMPONENTS
import Header from "./components/Header.js";

//ADDING baseURL
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3001";
} else {
  baseURL = "heroku backend url";
}
console.log("current base url:", baseURL);



// CLASS BASED COMPONENT
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: []
    }
  }

  //lifecyle
  componentDidMount(){
    this.getPlants()
  }

  getPlants = () => {
    fetch(baseURL + '/')
     .then((res) => {
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      console.log(data);
      this.setState({ plants: data.plants });
     });
   }


  render() {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
