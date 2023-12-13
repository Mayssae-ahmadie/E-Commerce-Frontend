import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2 className="text-center text-4xl mb-4 text-yellow-500"> ABOUT US</h2>

            <div className="flex justify-between">
                <div className="flex center text-teal-500 text-2xl px-10">
                    Quality Care, Every Paw Step
                </div>
                <div className="bg-teal-500 border-3 border-yellow rounded-l-full w-2/5">
                    <p className="text-white text-xl px-8 py-3">
                        Offering premium pet products to ensure the well-being of your furry friends.
                    </p>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="bg-teal-500 border-3 border-yellow rounded-r-full w-2/5">
                    <p className="text-white text-xl px-8 py-3">
                        A team of dedicated individuals deeply passionate about pets.
                    </p>
                </div>
                <div className="flex items-center text-teal-500 text-2xl px-10">
                    Passionate Pet Enthusiasts
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center text-teal-500 text-2xl px-10">
                    Tailored Pet Solutions
                </div>
                <div className="bg-teal-500 border-3 border-yellow rounded-l-full w-2/5">
                    <p className="text-white text-xl px-8 py-3">
                        From premium foods to stylish accessories, find a diverse range of products catering to your pet's unique needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;