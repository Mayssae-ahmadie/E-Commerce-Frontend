import React, { useState, useEffect } from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import NavBarHome from "./components/NavBarHome";
import NavBarProduct from "./components/NavBarProduct";
import NavBarCart from "./components/NavBarCart";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import './components/styles/style.css';
import './components/styles/commonstyle.css';
import AboutUs from "./components/about";
import Services from './components/services';
import Footer from './components/footer';
import Login from "./components/login";


function App() {
  return (
    <div>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
    </div>
  );
}

export default App;
