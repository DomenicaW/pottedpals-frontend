// Bring in React instance from React
import React from "react";

import { Outlet, Link } from "react-router-dom";

// STYLING SHEETS
import "./css-sheets/App.css";

// COMPONENTS
import Header from "./components/Header.js";



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
}

export default App;
