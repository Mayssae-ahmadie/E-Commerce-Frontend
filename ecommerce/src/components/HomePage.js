import React from "react";
import NavBar from "./NavBarHome";
import Herosection from "./Herosection";
import AboutUs from "./about";
import Products from "./Products";
import Services from "./Services";
import Footerhomepage from "./Footerhomepage";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <AboutUs />
      <Products />
      <Services />
      <Footerhomepage />
    </div>
  );
};

export default HomePage;