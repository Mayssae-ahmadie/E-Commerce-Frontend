import React from "react";
import NavBar from "./NavBarHome";
import Herosection from "./Herosection";
import AboutUs from "./about";
import Products from "./Products";
import Services from "./services";
import Footerhomepage from "./footerhomepage";

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