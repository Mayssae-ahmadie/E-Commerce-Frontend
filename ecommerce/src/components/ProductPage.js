import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import NavBarProduct from "./NavBarProduct";
import SlangImage from "../images/Your Pet-Priority.png";
import HeroProductPage from "../images/Hero-productPage.png";
import Footerproductcart from "./Footerproductcart";
import "./styles/Herosection2.css";
import axios from 'axios';
import add from '../images/Add.png'
import cat from '../images/Cat.png'
import dog from '../images/Dog.png'

const AllProductPage = () => {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    const fetchProductData = () => {
        axios.get('http://localhost:5000/products/getAll')
            .then((response) => {
                setProductData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    const addToCart = async (productId) => {
        try {
            const response = await axios.post('http://localhost:5000/cart/addProduct', {
                productId,
                quantity: 1,
            });

            if (response.data.success) {
                navigate('/cart');
            } else {
                console.error('Error adding product to cart:', response.data.message);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error.message);
        }
    };

    const catFoodProducts = productData.filter(product => product.category === 'Cat Food');
    const dogFoodProducts = productData.filter(product => product.category === 'Dog Food');
    const accessoryProducts = productData.filter(product => product.category === 'Accessories');

    return (
        <div>
            <NavBarProduct />
            <div className="Header-Desktop2">
                <div className="slang-image2">
                    <img src={SlangImage} alt="slang image"></img>
                </div>
                <div>
                    <button className="Order-now2"> Order Now </button>
                </div>
                <div className="Hero-image2">
                    <img src={HeroProductPage} alt="pet-cart-image"></img>
                </div>
            </div>

            <div>
                <h1 className="text-center text-4xl font-lilita pt-20" style={{ color: "#2EC4B6" }}> PRODUCTS </h1>
                <div>
                    <div className="grid grid-cols-3 gap-4 p-10">
                        {catFoodProducts.map((product) => (
                            <div key={product._id}>
                                <Link to={`/SingleProductPage/${product._id}`}></Link>
                                <div className="block justify-center items-center border-2 border-orange-500 rounded-3xl" style={{ borderColor: "FFB551" }}>
                                    <div className="flex justify-between">
                                        <div>
                                            <img className="h-20 border-2 border-orange-500 rounded-tl-3xl rounded-br-3xl" style={{ borderColor: "FFB551" }} src={cat} alt="" />
                                        </div>
                                        <img
                                            className="h-12 border-2 border-orange-500 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
                                            src={add}
                                            alt=""
                                            onClick={() => addToCart(product._id)}
                                        />
                                    </div>
                                    <img src={product.productImage} className="mx-auto w-64 h-64 p-5" alt={product.productName} onClick={() => navigate(`/SingleProductPage/${product._id}`)} />
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}>
                                        <Link to={`/SingleProductPage/${product._id}`}>{product.productName}</Link>
                                    </h2>
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}>{product.productBrand}</h2>
                                    <div className="border-none border-orange-500 rounded-b-3xl overflow-hidden pt-3">
                                        <h2 className="text-white text-center text-xl font-lilita pt-3 pb-3" style={{ backgroundColor: "#FFB551" }}>Price: ${product.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {dogFoodProducts.map((product) => (
                            <div key={product._id}>
                                <Link to={`/SingleProductPage/${product._id}`}></Link>
                                <div className="block justify-center items-center border-2 border-orange-500 rounded-3xl" style={{ borderColor: "FFB551" }}>
                                    <div className="flex justify-between">
                                        <div>
                                            <img className="h-20 border-2 border-orange-500 rounded-tl-3xl rounded-br-3xl" style={{ borderColor: "FFB551" }} src={dog} alt="" onClick={() => navigate(`/SingleProductPage/${product._id}`)} />
                                        </div>
                                        <img
                                            className="h-12 border-2 border-orange-500 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
                                            src={add}
                                            alt=""
                                            onClick={() => addToCart(product._id)}
                                        />
                                    </div>
                                    <img src={product.productImage} className="mx-auto w-64 h-64 p-5" alt={product.productImage} />
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}>
                                        <Link to={`/SingleProductPage/${product._id}`}>{product.productName}</Link>
                                    </h2>
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}> {product.productBrand}</h2>
                                    <div className="border-none border-orange-500 rounded-b-3xl overflow-hidden pt-3">
                                        <h2 className="text-white text-center text-xl font-lilita pt-3 pb-3" style={{ backgroundColor: "#FFB551" }}>Price: ${product.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="text-center text-4xl font-lilita pt-20" style={{ color: "#2EC4B6" }}> ACCESSORIES </h1>
                <div>
                    <div className="grid grid-cols-3 gap-4 p-10">
                        {accessoryProducts.map((product) => (
                            <div className="product-box" key={product._id}>
                                <Link to={`/SingleProductPage/${product._id}`}></Link>
                                <div className="block justify-center items-center border-2 border-orange-500 rounded-3xl" style={{ borderColor: "FFB551" }}>
                                    <div className="flex justify-end">
                                        <img
                                            className="h-12 border-2 border-orange-500 rounded-tr-3xl rounded-bl-3xl cursor-pointer"
                                            src={add}
                                            alt=""
                                            onClick={() => addToCart(product._id)}
                                        />
                                    </div>
                                    <img src={product.productImage} className="mx-auto w-64 h-64 p-5" alt={product.productName} onClick={() => navigate(`/SingleProductPage/${product._id}`)} />
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}>
                                        <Link to={`/SingleProductPage/${product._id}`}>{product.productName}</Link>
                                    </h2>
                                    <h2 className="text-center text-xl font-lilita" style={{ color: "#2EC4B6" }}> {product.productBrand}</h2>
                                    <div className="border-none border-orange-500 rounded-b-3xl overflow-hidden pt-3">
                                        <h2 className="text-white text-center text-xl font-lilita pt-3 pb-3" style={{ backgroundColor: "#FFB551" }}>Price: ${product.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center text-5xl flex items-center justify-center gap-8">
                    <p className="" style={{ color: "#FFB551" }}> Where style meets </p>
                    <p className="mt-10" style={{ color: "#2EC4B6" }}> wagging tails </p>
                </div>
            </div>

            <Footerproductcart />
        </div>
    );
}

export default AllProductPage;