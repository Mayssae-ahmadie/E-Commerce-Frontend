import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import LoginForm from "./components/login";
import CartPage from "./components/CartPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/SingleProductPage/:id" element={<SingleProductPage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div >
  );
}

export default App;