import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SingleProductPage from "./components/SingleProductPage";
import LoginForm from "./components/login";
import CartPage from "./components/CartPage";
import AdminDashboard from "./components/dashboard/AdminDashboard"
import SellerDashboard from "./components/dashboard/SellerDashboard";
import { getUserRole } from "./components/Util/GetUserData";

function App() {
  const token = localStorage.getItem('authToken')
  const role = getUserRole()
  console.log(token && role === 'admin')
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/SingleProductPage/:id" element={<SingleProductPage />} />
        <Route path="/CartPage" element={role === 'user' && <CartPage />} />
        <Route path="/admin/*" element={(role === 'admin') ? <AdminDashboard />: <HomePage/>} />
        <Route path="/seller/*" element={(role === 'seller') ? <SellerDashboard />: <HomePage/>} />
      </Routes>
    </div >
  );
}

export default App;