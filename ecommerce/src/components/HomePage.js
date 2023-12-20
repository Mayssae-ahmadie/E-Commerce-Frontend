import React from "react";
import NavBarHome from "./NavBarHome";
import Herosection from "./Herosection";
import AboutUs from "./about";
import Products from "./Products";
import Services from "./services";
import Footerhomepage from "./footerhomepage";

const HomePage = () => {
  return (
    <div>
      <NavBarHome />
      <Herosection />
      <AboutUs />
      <Products />
      <Services />
      <Footerhomepage />
    </div>
  );
};

export default HomePage;