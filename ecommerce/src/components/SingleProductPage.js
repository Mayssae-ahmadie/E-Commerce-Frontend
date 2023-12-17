import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBarProduct from "./NavBarProduct";
import SlangImage from "../images/Your Pet-Priority.png";
import HeroProductPage from "../images/Hero-productPage.png";
import Footerproductcart from "./Footerproductcart";
import "./styles/Herosection2.css";
import axios from 'axios';

const SingleProductPage = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/getByID/${id}`);
                setProduct(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductById();
    }, [id]);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = async () => {
        try {
            const { data: userResponse } = await axios.get(`http://localhost:5000/users/getUserId/${id}`);

            if (userResponse.success) {
                const userId = userResponse.data._id;

                const { data: cartResponse } = await axios.get(`http://localhost:5000/cart/getCart/${userId}`);

                if (cartResponse.success) {
                    const cartId = cartResponse.data._id;

                    const response = await axios.post(`http://localhost:5000/cart/addProduct/${cartId}`, {
                        productId: product._id,
                        quantity,
                    });

                    if (response.data.success) {
                        console.log('Product added to cart successfully');
                    } else {
                        console.error('Error adding product to cart:', response.data.message);
                    }
                } else {
                    console.error('Error fetching the user cart:', cartResponse.data.message);
                }
            } else {
                console.error('Error fetching user:', userResponse.message);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error.message);
        }
    };

    return (
        <div>
            <NavBarProduct />
            <div className="Header-Desktop2">
                <div className="slang-image2">
                    <img src={SlangImage} alt="slang image" />
                </div>
                <div>
                    <button className="Order-now2"> Order Now </button>
                </div>
                <div className="Hero-image2">
                    <img src={HeroProductPage} alt="pet-cart-image" />
                </div>
            </div>

            {product && (
                <div>
                    <h1 className="text-center text-4xl font-lilita pt-20" style={{ color: "#2EC4B6" }}>Product Details</h1>
                    <div className="flex justify-center content-around gap-20 mt-10">
                        <div className="justify-center items-center border-2 border-orange-500 rounded-3xl ml-10" style={{ borderColor: "FFB551" }}>
                            <div>
                                {product.discountPercentage > 0 && (
                                    <p className="product-discount">Discount: {product.discountPercentage}%</p>
                                )}
                            </div>
                            <img src={product.productImage} className="mx-auto w-64 h-64 p-5" alt={product.productName} />
                        </div>
                        <div>
                            <div className="text-left text-xl font-lilita" style={{ color: "#2EC4B6" }}>
                                <h2 >{product.productName}</h2>
                                <p> By: {product.productBrand}</p>
                                <p> Category: {product.category}</p>
                                <p> Description: {product.productDescription}</p>
                            </div>
                            <div>
                                <p className="text-center text-xl font-lilita pt-5" style={{ color: "#2EC4B6" }}>
                                    {product.stock > 0 ? "Available In Stock" : "Out of Stock"}
                                </p>
                            </div>
                            <div>
                                <p className=""> ${product.price}</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <label htmlFor="quantity" className="mr-2">Quantity:</label>
                                <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-2">-</button>
                                <span className="mx-2">{quantity}</span>
                                <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-2">+</button>
                                <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 ml-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footerproductcart />
        </div>
    );
}

export default SingleProductPage;