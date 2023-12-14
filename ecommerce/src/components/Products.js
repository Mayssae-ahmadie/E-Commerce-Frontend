import React, { useState, useEffect } from 'react';
import './styles/products.css';
import axios from 'axios';

const Products = () => {
    const [productsdata, setProductsData] = useState([]);

    const fetchProductsdata = () => {
        axios.get('http://localhost:5000/products/getAll')
          .then((response) => {
            setProductsData(response.data.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      useEffect(() => {
        fetchProductsdata();
      }, []);

  return (
    <div id='Productssection' >
      <h1 className="Product-title">Products section</h1>
    <div className="product-container">
      {productsdata && productsdata.map((products) => (
        <div className="product-box" key = {products.products_id}> 
            <div className="product-box">
            <img src={products.product_img} className="product-img" alt={products.product_name} />
            <h2 className="product-name">{products.product_name}</h2>
            </div> 
        </div>
      ))}
    </div>
    </div>
  )
}

export default Products;