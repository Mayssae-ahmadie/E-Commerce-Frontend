import React from "react";
import NavBar from "./NavBarHome";
import Herosection from "./Herosection";
import AboutUs from "./about";
import Services from "./services";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <AboutUs />
      {/* <Products /> */}
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
