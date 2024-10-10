import React from 'react';
import Shoe from '../assets/shoe_image.png'

const Herosection = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center p-4 md:px-20">
                <div className="flex-1 space-y-4 text-center md:text-left">
                    <h1 className="text-4xl md:text-8xl font-bold text-gray-800">YOUR FEET DESERVE THE BEST </h1>
                    <p className="text-lg text-gray-600">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-[#D01C28] text-white px-3 py-1 font-semibold rounded hover:bg-red-500">Shop Now</button>
                        <button className="border-2 border-gray-600 rounded px-3 py-1 font-semibold ">Category</button>

                    </div>
                </div>
                <div className="flex-1 mt-6 md:mt-0">
                    <img src={Shoe} alt="Sample Image" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>
        </div>

    );
}

export default Herosection;



