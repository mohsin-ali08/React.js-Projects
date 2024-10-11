import React from 'react';

const Quiz = () => {
    return (
        <div className="bg-white border  bg-opacity-50 shadow-lg rounded-lg p-8 max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">React Quiz App</h1>
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold">
                    00:00
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl text-white font-semibold">Question 1: What is React?</h2>
                <ul className="mt-4">
                    <li className="bg-gray-200 p-2 mb-2 rounded hover:text-gray-400 font-semibold"><span className='border text-sm border-black rounded-full px-[5px] items-center  mx-2'>A</span> library for JavaScript</li>
                    <li className="bg-gray-200 p-2 mb-2 rounded hover:text-gray-400 font-semibold"><span className='border text-sm border-black rounded-full px-[5px] items-center  mx-2'>B</span> type of fruit</li>
                    <li className="bg-gray-200 p-2 mb-2 rounded hover:text-gray-400 font-semibold"><span className='border text-sm border-black rounded-full px-[5px] items-center  mx-2'>C</span> CSS framework</li>
                    <li className="bg-gray-200 p-2 mb-2 rounded hover:text-gray-400 font-semibold"><span className='border text-sm border-black rounded-full px-[5px] items-center  mx-2'>D</span> Database</li>
                </ul>
            </div>
            <div className="flex justify-between mt-6">
                <button className="bg-white  font-semibold hover:bg-black hover:text-white  text-black px-4 py-2 rounded">Start</button>
                <button className="bg-yellow-300 hover:bg-yellow-400 font-semibold  text-black px-4 py-2 rounded">Next</button>
            </div>
        </div>
    );
};

export default Quiz;
