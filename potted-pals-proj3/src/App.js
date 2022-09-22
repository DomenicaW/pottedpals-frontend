// Bring in React instance from React
import React from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header.js";
import PlantList from "./components/PlantList.js"

function App() {
  return(
    <div className="App">
    <Header />
    <PlantList />

  </div>
  )
}


  


export default App;
