import "./styles/NavBar2.css";
import Logo from "../images/Logo.png";
// import Vector from "../images/Vector.png";
import CartImage from "../images/cart-image.png";
import { Link } from "react-router-dom";

const NavBarProduct = () => {
      const token = sessionStorage.getItem('authToken')
  const handlelogout = () => {sessionStorage.removeItem('authToken')}
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
          <Link to='/'>
            <a href="#About" className="">About</a>
            </Link>
          </li>
          <li>
            <a href="#Products2" className="">Products</a>
          </li>
          <li>
          <Link to='/'>
            <a href="#Services" className="">Services</a>
            </Link>
          </li>
          <li>
            <a href="#Contact2" className="">Contact us</a>
          </li>
          {/* <li>
            <img src={Vector} className="search-icon2" alt="search icon"></img>
          </li> */}
          <li>
            <Link to='/CartPage'>
              <img src={CartImage} className="cart-icon2" alt="cart-icon"></img>
            </Link>
          </li>
        </ul>
      </div>
      <div className="Login2">
      {token? 
        <Link to='/' className="login-btn2" onClick={handlelogout}>Log out</Link>
        :
        <Link to='/login' className="login-btn2">Log in</Link>
      }
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

export default NavBarProduct;
