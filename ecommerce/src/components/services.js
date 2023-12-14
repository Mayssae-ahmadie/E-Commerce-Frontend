import React from 'react';
import './styles/style.css';
import './styles/commonstyle.css';
import petshampoo from '../images/Pet shampoo.png'
import petgrooming from '../images/Pet grooming.png'
import petvaccine from '../images/Pet vaccine.png'
import pethome from '../images/Pet home.png'

const Services = () => {
    return (
        <div>
            <h2 className="text-center text-4xl mb-4 text-yellow-500">SERVICES</h2>
            <div className="flex gap-8 m-8 justify-center">
                <div className="bg-teal-500 border border-yellow w-1/6 h-1/2 p-4 rounded-xl">
                    <img className="mx-auto my-2 h-20 w-20" src={petshampoo} alt="" />
                    <p className="text-white font-lilita text-center">
                        Pet friendly shampoos and conditioners to cleanse your pet’s coats leaving it clean, shiny and smelling great
                    </p>
                </div>
                <div className="bg-teal-500 border border-yellow w-1/6 h-1/2 p-4 rounded-xl mt-10">
                    <img className="mx-auto my-2 h-20 w-20" src={petgrooming} alt="" />
                    <p className="text-white font-lilita text-center">
                        Whether your furry friend needs a trim or a full haircut, our team of skilled groomers is here to work their magic.
                    </p>
                </div>
                <div className="bg-teal-500 border border-yellow w-1/6 h-1/2 p-4 rounded-xl">
                    <img className="mx-auto my-2 h-20 w-20" src={petvaccine} alt="" />
                    <p className="text-white font-lilita text-center">
                        Pet consultations tailored to your furry friend's needs, ensuring optimal health and happiness.
                    </p>
                </div>
                <div className="bg-teal-500 border border-yellow w-1/6 h-1/2 p-4 rounded-xl mt-10">
                    <img className="mx-auto my-2 h-20 w-20" src={pethome} alt="" />
                    <p className="text-white font-lilita text-center">
                        Trust our caring team for pet sitting services, providing a home away from home for your beloved furry companions.
                    </p>
                </div>
            </div>
            <div className="text-center text-5xl flex items-center justify-center gap-8">
                <p className="text-orange-500">Where style meets</p>
                <p className="text-yellow-500 mt-6">wagging tails</p>
            </div>
        </div>
    );
};

export default Services;