import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/image-hero.png";
import SlangImage from "../images/Your Pet-Priority.png";
import "./styles/Herosection.css";

function Herosection({ img }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <div>
      <div className="Header-Desktop">
        <div className="slang-image">
          <img src={SlangImage} alt="slang image"></img>
        </div>
        <div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             >
          <Link to="/ProductPage">
            <button className="Order-now"> Order Now </button>
          </Link>
        </div>
        <div className="Hero-image">
          <img src={Image} alt="pet image"></img>
        </div>
      </div>
      


      {/* <div className="Hero-Mobile">
        <div className="Mobile">
          <div className="Mobile-Navbar">
            <button className="Mobile-Burger" onClick={toggleBurgerMenu}></button>

            <div class="space-y-2">
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
              <div class="w-8 h-0.5 bg-gray-600"></div>
            </div>

            <div className={`Mobile-Nav ${isBurgerActive ? "active" : ""}`}>
              <a className="Mobile-Nav-Title" href="/About">
                About
              </a>
              <a className="Mobile-Nav-Title" href="/Products">
                Products
              </a>
              <a className="Mobile-Nav-Title" href="/Services">
                Services
              </a>
              <a className="Mobile-Nav-Title" href="/Contact us">
                Contact us
              </a>
            </div>
            <div className="Mobile-Logo">Paw-sitive</div>
            <button className="Mobile-Login">Log in</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Herosection;