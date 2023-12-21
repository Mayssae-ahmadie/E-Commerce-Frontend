import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBarProduct from "./NavBarProduct";
import SlangImage from "../images/Your Pet-Priority.png";
import HeroProductPage from "../images/Hero-productPage.png";
import Footerproductcart from "./footerproductcart";
import "./styles/Herosection2.css";
import axios from "axios";
import { getUserID } from "./Util/GetUserData";

const SingleProductPage = () => {
    const handlelogout = () => {
        sessionStorage.removeItem("authToken");
    };
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const response = await axios.get(
                    `https://paw-sitive.onrender.com/products/getByID/${id}`
                );
                setProduct(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductById();
    }, [id]);

    const handleAddToCart = async (product) => {
        console.log(product);
        try {
            const userId = getUserID();
            console.log(userId);
            const updatedCart = {
                userId: userId,
                products: [
                    {
                        productId: product._id,
                        quantity: 1,
                    },
                ],
            };

            const response = await axios.post(
                "https://paw-sitive.onrender.com/cart/addProduct",
                updatedCart
            );
            console.log(response.data);

            if (response.data.success) {
                console.log("Product added to cart successfully");
                navigate("/CartPage");
                window.location.reload();
            } else {
                console.error("Error adding product to cart:", response.data.message);
            }
        } catch (error) {
            console.error("Error adding product to cart:", error.message);
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
                    <h1
                        className="text-center text-4xl font-lilita pt-20"
                        style={{ color: "#2EC4B6" }}
                    >
                        Product Details
                    </h1>
                    <div className="flex justify-center content-around gap-20 mt-10">
                        <div
                            className="justify-center items-center border-2 border-orange-500 rounded-3xl ml-10"
                            style={{ borderColor: "FFB551" }}
                        >
                            <div>
                                {product.discountPercentage > 0 && (
                                    <p className="product-discount">
                                        Discount: {product.discountPercentage}%
                                    </p>
                                )}
                            </div>
                            <img
                                src={product.productImage}
                                className="mx-auto w-64 h-64 p-5"
                                alt={product.productName}
                            />
                        </div>
                        <div>
                            <div
                                className="text-left text-xl font-lilita"
                                style={{ color: "#2EC4B6" }}
                            >
                                <h2>{product.productName}</h2>
                                <p> By: {product.productBrand}</p>
                                <p> Category: {product.category}</p>
                                <p> Description: {product.productDescription}</p>
                            </div>
                            <div>
                                <p
                                    className="text-center text-xl font-lilita pt-5"
                                    style={{ color: "#2EC4B6" }}
                                >
                                    {product.stock > 0 ? "Available In Stock" : "Out of Stock"}
                                </p>
                            </div>
                            <div>
                                <p className="text-center text-xl font-lilita"
                                    style={{ color: "#2EC4B6" }}> ${product.price}</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="text-xl mt-4 bg-ffb551 h-38 w-300 text-white border-2 border rounded-2xl pt-3 pb-3 pl-12 pr-12" style={{ backgroundColor: "#FFB551"}}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-5xl flex items-center justify-center gap-8">
                        <p className="" style={{ color: "#FFB551" }}>
                            {" "}
                            Where style meets{" "}
                        </p>
                        <p className="mt-10" style={{ color: "#2EC4B6" }}>
                            {" "}
                            wagging tails{" "}
                        </p>
                    </div>
                </div>
            )}

            <Footerproductcart />
        </div>
    );
};

export default SingleProductPage;
