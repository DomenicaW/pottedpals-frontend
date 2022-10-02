// import React, { useState } from "react";
import React from "react"
import { createRoot } from "react-dom/client";

// IMPORT FOR REACT ROUTER
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

//STYLING CSS
import "./css-sheets/index.css";

// Main Component
import App from "./App";
import Succulents from "./page-routes/Succulents.js";
import Flowers from "./page-routes/Flowers.js";
import HousePlants from "./page-routes/HousePlants.js";
import Herbs from "./page-routes/Herbs.js";
// import About from './routes/about.js'
import Contact from "./page-routes/Contact.js";
import Login from "./page-routes/Login.js";
import Register from "./page-routes/Register.js";
import AddNew from "./page-routes/AddNew.js";
import YourGarden from "./page-routes/YourGarden.js";

const container = document.getElementById("root");
const root = createRoot(container);

// const rootElement = document.getElementById("root");
root.render(
  <BrowserRouter>
  
  

    <Routes>
      <Route path="/" element={<App />}>
        <Route path="succulents" element={<Succulents />} />
        <Route path="flowers" element={<Flowers />} />
        <Route path="housePlants" element={<HousePlants />} />
        <Route path="herbs" element={<Herbs />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="addNew" element={<AddNew />} />
        <Route path="yourGarden" element={<YourGarden />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // rootElement
);
