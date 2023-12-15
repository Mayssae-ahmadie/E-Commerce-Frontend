import React from 'react';
import paws from '../images/Paws.png'

const AboutUs = () => {
    return (
        <div className='about-section relative'>
            <img className="absolute h-48 -top-20" src={paws} alt="Paws" />

            <h2 className="text-center text-4xl mb-10" style={{ color: "#FFB551" }}> ABOUT US</h2>

            <div className="flex justify-between mb-5">
                <div className="flex center items-center text-3xl px-8" style={{ color: "#2EC4B6" }}>
                    Quality Care, Every Paw Step
                </div>
                <div className="bg-teal-500 border-3 border-yellow rounded-l-full w-2/5">
                    <p className="text-white text-xl px-8 py-5">
                        Offering premium pet products to ensure the well-being of your furry friends.
                    </p>
                </div>
            </div>

            <div className="flex justify-between mb-5">
                <div className="bg-teal-500 border-3 border-yellow rounded-r-full w-2/5">
                    <p className="text-white text-xl px-8 py-5">
                        A team of dedicated individuals deeply passionate about pets.
                    </p>
                </div>
                <div className="flex items-center text-teal-500 text-3xl px-10">
                    Passionate Pet Enthusiasts
                </div>
            </div>

            <div className="flex justify-between mb-5">
                <div className="flex items-center text-teal-500 text-3xl px-10">
                    Tailored Pet Solutions
                </div>
                <div className="bg-teal-500 border-3 border-yellow rounded-l-full w-2/5">
                    <p className="text-white text-xl px-8 py-5">
                        From premium foods to stylish accessories, find a diverse range of products catering to your pet's unique needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;