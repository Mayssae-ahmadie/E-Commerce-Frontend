import React, { useState } from 'react';
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

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <div>
      <div className="nav-bar-desktop">
        <div className="Logo">
          <Link to="/">
            <img src={Logo} alt="logo icon" />
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
              <img src={Vector} className="search-icon" alt="search icon" />
            </li>
            <li>
              <Link to='/CartPage'>
                <img src={CartImage} className="cart-icon" alt="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="Login">
          <Link to='/login' className="login-btn">Log in</Link>
        </div>
      </div>

      <div className="NavBar-Home-Mobile">
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
          <div className="Logo">
            <Link to="/">
              <img src={Logo} alt="logo icon" />
            </Link>
      </div>
      <div className="Login">
        {token? 
        <Link to='/' className="login-btn" onClick={handlelogout}>Log out</Link>
        :
        <Link to='/login' className="login-btn">Log in</Link>
      }
        </div>
          </div>
          <div className="search-icon">
            <img src={Vector} className="search-icon" alt="search icon" />
          </div>
          <div className="cart-icon">
            <Link to='/CartPage'>
              <img src={CartImage} className="cart-icon" alt="cart-icon" />
            </Link>
          </div>
          <div className="Mobile-Login">
            <button className="Mobile-Login">Log in</button>
          </div>
        </div>
      </div>
  );
}

export default NavBarHome;