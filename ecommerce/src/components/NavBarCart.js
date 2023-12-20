import "./styles/NavBar2.css";
import "./styles/Herosection2.css";
import Logo from "../images/Logo.png";
// import Vector from "../images/Vector.png";
import CartImage from "../images/cart-image.png";
import { Link } from "react-router-dom";

const NavBarCart = () => {
  return (

    <div className="nav-bar2">
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
          {/* <li>
            <img src={Vector} className="search-icon2" alt="search icon"></img>
          </li> */}
          <li>
            <img src={CartImage} className="cart-icon2" alt="cart-icon"></img>
          </li>
        </ul>
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

export default NavBarCart;
