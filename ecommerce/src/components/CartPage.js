import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBarCart from './NavBarCart';
import Footerproductcart from './Footerproductcart';
import SlangImage2 from '../images/Time-to-Pay.png';
import CartImage2 from '../images/Time-to-Pay2.png';
import './styles/Herosection2.css';
import { getUserID } from '../Util/GetUserData';

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState();

  const handleCartData = async () => {
    try {
      const userId = getUserID();
      console.log(userId);

      const CartData = {
        userId: userId,
        products: cartData.map(product => ({
          productId: product.productId,
          quantity: product.quantity,
        })),
      };

      const response = await axios.get(`http://localhost:5000/cart/getCart/${userId}`);
      console.log(response.data);
      if (response.data.success) {
        console.log('Cart retrieved successfully');
        setCartData(response.data.data.products);

        const totalPrice = response.data.data.products.reduce((total, product) => {
          return total + product.productId.price * product.quantity;
        }, 0);
        setTotalPrice(totalPrice);
      } else {
        console.error('Error retrieving the cart', response.data.message);
      }
    } catch (error) {
      console.error('Error retrieving the cart', error.message);
    }
  };

  useEffect(() => {
    handleCartData();
  }, []);

  const handleCheckout = () => {
    alert('Checkout successful! Thank you for your order.');
    setCartData([]);
    setTotalPrice(0);
    setCheckoutStatus('success');
  };

  return (
    <div>
      <NavBarCart />
      <div className="Header-Desktop2">
        <div className="slang-image3">
          <img src={SlangImage2} alt="slang image" />
        </div>
        <div>
          <button className="Order-now2">
            Order Now
          </button>
        </div>
        <div className="Hero-image3">
          <img src={CartImage2} alt="pet-cart-image" />
        </div>
      </div>

      <h2 className="text-center text-4xl font-lilita pt-20" style={{ color: "#2EC4B6" }}> Your Cart</h2>
      <div id="cart-items">
        {cartData.map(product => (
          <div key={product.productId}>
            <p>Name: {product.productName}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
      <div id="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
      {checkoutStatus === 'success' ? (
        <p>Thank you for your order!</p>
      ) : (
        <button onClick={handleCheckout}>Checkout</button>
      )}

      <div className="text-center text-5xl flex items-center justify-center gap-8">
        <p className="" style={{ color: "#FFB551" }}> Where style meets </p>
        <p className="mt-10" style={{ color: "#2EC4B6" }}> wagging tails </p>
      </div>

      <Footerproductcart />
    </div>
  );
};

export default CartPage;