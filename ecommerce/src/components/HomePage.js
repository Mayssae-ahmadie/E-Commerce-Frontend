import React from "react";
import NavBar from "./NavBarHome";
import Herosection from "./Herosection";
import AboutUs from "./about";
import Services from "./services";
import Footer from "./footer";
import ProductsHomepage from "./productshomepage";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Herosection />
      <AboutUs />
      <ProductsHomepage />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
