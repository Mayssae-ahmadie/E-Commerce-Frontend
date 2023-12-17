import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
// import CartPage from "./components/CartPage";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Cart" element={<CartPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/SingleProductPage/:id" element={<SingleProductPage />} />

      </Routes>
    </div >
  );
}

export default App;