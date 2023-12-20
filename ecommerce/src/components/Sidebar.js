import "./styles/NavBar.css";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const NavBarHome = () => {
  const [section, setSection] = useState('')
  const handlelogout = () => {sessionStorage.removeItem('authToken')}
  return (

      <div className="nav-bar4">
        <div className="Logo4">
           <img src={Logo} alt="logo icon"></img>
        </div>
        <div className="Links4">
          <ul>
            <li>
              <Link to="/UserTable" className="">Users</Link>
            </li>
            <li>
              <Link to="/ProductTable" className="">Products</Link>
            </li>
            <li>
              <Link to="/OrderTable" className="">Orders</Link>
            </li>
            <li>
              <Link to="/login" onClick={handlelogout} className="">Logout</Link>
            </li>
          </ul>
        </div>
      </div>



    // <div>
    //   <nav className="Navbar">
    //     <a className="N-logo" href="index.html">
    //       Paw-sitive
    //     </a>
    //     <div>
    //       <ul id="N-menu" className={"#N-menu active"}>
    //         <li className="N-menu-items">
    //           <a className="N-menu-tag active" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="N-menu-items">
    //           <a className="N-menu-tag" href="#">
    //             About
    //           </a>
    //         </li>
    //         <li className="N-menu-items">
    //           <a className="N-menu-tag" href="#">
    //             Products
    //           </a>
    //         </li>
    //         <li className="N-menu-items">
    //           <a className="N-menu-tag" href="#">
    //             Services
    //           </a>
    //         </li>
    //         <li className="N-menu-button">
    //           <a className="N-register" href="#">
    //             Contact us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div id="N-mobile"></div>
    //   </nav>
    // </div>
  );
};

export default NavBarHome;
