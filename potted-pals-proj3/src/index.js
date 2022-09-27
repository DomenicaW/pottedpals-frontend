import React from "react";
import ReactDOM from "react-dom";

// IMPORT FOR REACT ROUTER
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//STYLING CSS
import './css-sheets/index.css';

// Main Component
import App from './App';
import Succulents from './routes/succulents.js'
import Flowers from './routes/flowers.js'
import HousePlants from './routes/housePlants.js'
import Herbs from './routes/herbs.js'
import About from './routes/about.js'
import Contact from './routes/contact.js'
import Login from './routes/login.js'
import Register from './routes/register.js'
import AddNew from './routes/addNew.js'
import YourGarden from './routes/yourGarden.js'



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />}>
        <Route path="succulents" element={<Succulents />} />
        <Route path="flowers" element={<Flowers />} />
        <Route path="housePlants" element={<HousePlants />} />
        <Route path="herbs" element={<Herbs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />   
        <Route path="login" element={<Login />} />   
        <Route path="register" element={<Register />} />  
        <Route path="addNew" element={<AddNew />} />
        <Route path="yourGarden" element={<YourGarden />} />         
      </Route>
    </Routes>
    
  </BrowserRouter>,
  rootElement
);


