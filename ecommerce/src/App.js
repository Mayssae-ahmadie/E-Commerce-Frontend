import React, { useState, useEffect } from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import NavBarHome from "./components/NavBarHome";
import NavBarProduct from "./components/NavBarProduct";
import NavBarCart from "./components/NavBarCart";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>


    </div>
  );
}

export default App;
