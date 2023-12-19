import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarCart from './NavBarCart';
import Footerproductcart from './Footerproductcart';
import SlangImage2 from '../images/Time-to-Pay.png';
import CartImage2 from '../images/Time-to-Pay2.png';
import './styles/Herosection2.css';
import { getUserID } from './Util/GetUserData';

const CartPage = ({ userId, cartId }) => {
  const [cart, setCart] = useState({ products: [] });
  const [userID, setUserID] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutStatus, setCheckoutStatus] = useState(null);

  useEffect(() => {
    const fetchedUserID = getUserID();
    setUserID(fetchedUserID);

    if (fetchedUserID) {
      fetch(`/getCart/${fetchedUserID}`)
        .then(response => response.json())
        .then(cartData => {
          setCartData(cartData.products);

          const totalPrice = cartData.products.reduce((total, product) => {
            return total + product.price * product.quantity;
          }, 0);
          setTotalPrice(totalPrice);
        })
        .catch(error => console.error('Error fetching cart data:', error));
    }

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

      <Footerproductcart />
    </div>
  );
}

export default CartPage;