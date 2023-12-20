import React, { useState } from 'react';
import "./styles/NavBar2.css";
import Logo from "../images/Logo.png";
import Vector from "../images/Vector.png";
import CartImage from "../images/cart-image.png";
import { Link } from "react-router-dom";

const NavBarProduct = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };
  return (

    <div className="nav-bar2">
      <div className="nav-bar-desktop">
        <div className="Logo2">
          <Link to="/">
            <img src={Logo} alt="logo icon"></img>
          </Link>
        </div>
        <div className="Links2">
          <ul>
            <li>
              <a href="#About" className="">About</a>
            </li>
            <li>
              <a href="/Products" className="">Products</a>
            </li>
            <li>
              <a href="#Services" className="">Services</a>
            </li>
            <li>
              <a href="#Contact" className="">Contact us</a>
            </li>
            <li>
              <img src={Vector} className="search-icon2" alt="search icon"></img>
            </li>
            <li>
              <Link to='/CartPage'>
                <img src={CartImage} className="cart-icon2" alt="cart-icon"></img>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Login2">
          <Link to='/login' className="login-btn2">Log in</Link>
        </div>
      </div>

      <div className="NavBar-Product">
        <div className='Mobile'>
          <div className="Mobile-Navbar">
            <button className="Mobile-Burger" onClick={toggleBurgerMenu}>
              ☰
            </button>
            <div className={`Mobile-Nav ${isBurgerActive ? 'active' : ''}`}>
              <a className="Mobile-Nav-Title" href="About"> About </a>
              <Link to="/">
                <a className="Mobile-Nav-Title" href="Products"> Products </a>
              </Link>
              <a className="Mobile-Nav-Title" href="Services"> Services </a>
              <a className="Mobile-Nav-Title" href="Contact us">Contact us</a>
            </div>
          </div>
          <div className="Logo2">
            <Link to="/">
              <img src={Logo} alt="logo icon" />
            </Link>
          </div>
          <div className="search-icon2">
            <img src={Vector} className="search-icon" alt="search icon" />
          </div>
          <div className="cart-icon2">
            <Link to='/CartPage'>
              <img src={CartImage} className="cart-icon" alt="cart-icon" />
            </Link>
          </div>
          <div className="Mobile-Login">
            <button className="Mobile-Login">Log in</button>
          </div>
        </div>
      </div>

      {/* // <div>
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
    //   </nav> */}
    </div>
  );
};

export default NavBarProduct;
