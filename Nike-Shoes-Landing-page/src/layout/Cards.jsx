import React from 'react';

import Card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';

const Cards = () => {
    return (
        <div className="container mx-auto  p-6 pb-20">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={Card1} alt="Nike Shoe 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Max 2021</h2>
                        <p className="text-gray-600">$120.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card2} alt="Nike Shoe 2" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike ZoomX Vaporfly</h2>
                        <p className="text-gray-600">$250.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card3} alt="Nike Shoe 3" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike React Infinity Run</h2>
                        <p className="text-gray-600">$160.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card4} alt="Nike Shoe 4" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Force 1</h2>
                        <p className="text-gray-600">$90.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card5} alt="Nike Shoe 5" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Max 270</h2>
                        <p className="text-gray-600">$130.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card6} alt="Nike Shoe 5" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Max 270</h2>
                        <p className="text-gray-600">$130.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card7} alt="Nike Shoe 5" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Max 270</h2>
                        <p className="text-gray-600">$130.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full md:w-60">
                    <img src={card8} alt="Nike Shoe 5" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="font-bold text-lg">Nike Air Max 270</h2>
                        <p className="text-gray-600">$130.00</p>
                        <button className="mt-2 bg-[#D01C28] text-white px-3 py-1 text-sm  rounded hover:bg-gray-700">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
