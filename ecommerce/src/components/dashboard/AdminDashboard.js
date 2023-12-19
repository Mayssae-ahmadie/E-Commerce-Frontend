<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };

  return (
    <div>
      <nav className="Navbar">
        <Link className="Pet-logo" to="/"></Link>
        <div>
          <ul id="N-menu" className={clicked ? "#N-menu active" : "#N-menu"}>
            <li className="N-menu-items">
              <h1 className="Mn-admin">Hello Admin</h1>
            </li>

            <li className="N-menu-button">
              <button className="N-register">Sign Out</button>
            </li>
          </ul>
        </div>

        <div id="" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </div>
=======
import UserTable from "../dashboard/UserTable";
import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";
import SideBar from "../Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <SideBar />
      <UserTable />
      <ProductTable />
      <OrderTable />
    </>
>>>>>>> 6-dashboard-admin
  );
};

export default AdminDashboard;
