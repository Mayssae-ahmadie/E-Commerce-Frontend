import React from "react";
import Herosection from "./Herosection";
import About from './About';
import Products from "./Products";
import NavBar from "./NavBar";
// import Services from './Services';
// import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Herosection text="omar Now!" />
      {/* <About/> */}
      {/* <Products /> */}
      {/* <Services/> */}
      {/* <Contact/> */}
    </div>
  );
};

export default HomePage;
