import NavBarCart from "./NavBarCart";
import "./styles/Herosection2.css";
import SlangImage2 from "../images/Time-to-Pay.png";
import CartImage2 from "../images/Time-to-Pay2.png";

const CartPage = () => {
  return (
    <div>
      <NavBarCart />
      <div className="Header-Desktop2">
        <div className="slang-image3">
          <img src={SlangImage2} alt="slang image"></img>
        </div>
        <div>
          <button className="Order-now2"> Order Now </button>
        </div>
        <div className="Hero-image3">
          <img src={CartImage2} alt="pet-cart-image"></img>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
