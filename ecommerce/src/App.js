import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
// import ProductPage from "./components/ProductPage";
// import CartPage from "./components/CartPage";
import Login from "./components/login";
// import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Products" element={<ProductPage />} />
        <Route path="/Cart" element={<CartPage />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div >
  );
}

export default App;