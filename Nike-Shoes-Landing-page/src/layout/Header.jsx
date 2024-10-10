import React from 'react';
import Logo from '../assets/brand_logo.png';

const Navbar = () => {
    return (
        <nav className="md:px-20 px-5 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={Logo} alt="Nike Logo" className="w-[76px] h-[42.75px]" />
                </div>
                <div className="hidden md:flex space-x-5  font-semibold ">
                    <a href="#" className="hover:text-red-600 hover:border-b-2 ">MENU</a>
                    <a href="#" className="hover:text-red-600 hover:border-b-2 ">LOCATION</a>
                    <a href="#" className="hover:text-red-600 hover:border-b-2 ">ABOUT</a>
                    <a href="#" className="hover:text-red-600 hover:border-b-2 ">CONTACT</a>
                </div>
                <div>
                    <button className="bg-[#D01C28] text-white px-3 py-[6px] rounded font-semibold hover:bg-opacity-90">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
