// import React, { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

// IMPORT FOR REACT ROUTER
import { BrowserRouter } from "react-router-dom";

//STYLING CSS
import "./css-sheets/index.css";

// Main Component
import App from "./App";


const container = document.getElementById("root");
const root = createRoot(container);

// const rootElement = document.getElementById("root");
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // rootElement
);
