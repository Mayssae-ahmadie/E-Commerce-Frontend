import React, { useState, useEffect } from "react";
import "./App.css";
// import NavBarHome from "./components/NavBarHome";
// import NavBarProduct from "./components/NavBarProduct";
// import NavBarCart from "./components/NavBarCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";

// import ProductPage from "./components/ProductPage";
// import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Productpage" element={<ProductPage />} /> */}
      </Routes>
    </div >
  );
}

export default App;