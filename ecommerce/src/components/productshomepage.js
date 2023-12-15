import React from 'react';
import { Link } from 'react-router-dom';
import petfood from '../images/Pet Food.png';
import petaccessory from '../images/Pet accessory.png';
import paws from '../images/Paws.png'

const ProductsHomepage = () => {
    return (
        <div className="text-center text-4xl pt-10 pb-10 relative" style={{ color: "#FFB551" }}> PRODUCTS
            <div className="flex justify-center gap-20 p-2 md:p-10 relative">
                <div className="block relative">
                    <img className="h-64" src={petfood} alt="" />
                    <Link to="/ProductPage">
                        <button className="text-xl mt-4 bg-ffb551 h-38 w-300 text-white border-2 border rounded-2xl pt-3 pb-3 pl-12 pr-12" style={{ backgroundColor: "#FFB551", borderColor: '#2EC4B6' }}>
                            SHOP FOOD
                        </button>
                    </Link>
                </div>
                <div className="block relative">
                    <img className="h-64" src={petaccessory} alt="" />
                    <Link to="/ProductPage">
                        <button className="text-xl mt-4 bg-ffb551 h-38 w-300 text-white border-2 border rounded-2xl pt-3 pb-3 pl-12 pr-12" style={{ backgroundColor: "#FFB551", borderColor: '#2EC4B6' }}>
                            SHOP ACCESSORIES
                        </button>
                    </Link>
                </div>
                <img className="h-48 absolute right-2 -mt-100 mr-87" src={paws} alt="" />
            </div>
        </div>
    );
};

export default ProductsHomepage;