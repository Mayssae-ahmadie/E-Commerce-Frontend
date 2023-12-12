import NavBar from "./NavBar";
import "./styles/Herosection2.css";
import SlangImage from "../images/Your Pet-Priority.png";
import ProductImage from "../images/Hero-productPage.png";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="Header-Desktop2">
        <div className="slang-image2">
          <img src={SlangImage} alt="slang image"></img>
        </div>
        <div>
          <button className="Order-now2"> Order Now </button>
        </div>
        <div className="Hero-image2">
          <img src={ProductImage} alt="pet-cart-image"></img>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
