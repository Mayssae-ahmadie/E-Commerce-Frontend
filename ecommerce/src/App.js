import React, { useState, useEffect } from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import NavBarHome from "./components/NavBarHome";
import NavBarProduct from "./components/NavBarProduct";
import NavBarCart from "./components/NavBarCart";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import './components/styles/style.css';
import './components/styles/commonstyle.css';


function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;