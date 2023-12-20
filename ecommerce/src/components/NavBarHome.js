import "./styles/NavBar.css";
import Logo from "../images/Logo.png";
import Vector from "../images/Vector.png";
import CartImage from "../images/cart-image.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBarHome = () => {
  const token = sessionStorage.getItem('authToken')
  const handlelogout = () => {sessionStorage.removeItem('authToken'); window.location.reload()};
  useEffect(()=>{},[handlelogout])
  return (

    <div className="nav-bar">
      <div className="Logo">
        <Link to="/">
          <img src={Logo} alt="logo icon"></img>
        </Link>
      </div>
      <div className="Links">
        <ul>
          <li>
            <a href="#About" className="">About</a>
          </li>
          <li>
            <a href="/ProductPage" className="">Products</a>
          </li>
          <li>
            <a href="#Services" className="">Services</a>
          </li>
          <li>
            <a href="#Contact" className="">Contact us</a>
          </li>
          <li>
            <img src={Vector} className="search-icon" alt="search icon"></img>
          </li>
          <li>
            <Link to='/CartPage'>
              <img src={CartImage} className="cart-icon" alt="cart-icon"></img>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Login">
        {token? 
        <Link to='/' className="login-btn" onClick={handlelogout}>Log out</Link>
        :
        <Link to='/login' className="login-btn">Log in</Link>
      }
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
