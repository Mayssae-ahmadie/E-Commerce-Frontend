import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";
// import SideBar from "../Sidebar";
// import Logo from "ecommerce\src\images\Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SellerDashboard = () => {
  const [section, setSection] = useState('')
  const handlelogout = () => { sessionStorage.removeItem('authToken') }
  return (
    <>
      <div className="nav-bar4">
        {/* <div className="Logo4">
          <img src={Logo} alt="logo icon"></img>
        </div> */}
        <div className="Links4">
          <ul>
            <li>
              <Link to="" onClick={() => setSection('Products')} className="">Products</Link>
            </li>
            <li>
              <Link to="" onClick={() => setSection('Orders')} className="">Orders</Link>
            </li>
            <li>
              <Link to="/login" onClick={handlelogout} className="">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {section === 'Products' && <ProductTable />}
      {section === 'Orders' && <OrderTable />}
    </>
  );
};

export default SellerDashboard;
