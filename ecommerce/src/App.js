import React, { useState, useEffect } from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>


    </div>
  );
}

export default App;
