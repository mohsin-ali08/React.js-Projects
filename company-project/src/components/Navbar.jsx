import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-20 border-b backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-1  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Company Name on the Left */}
          <div className="flex items-center">
            <h1 className="text-white font-bold text-2xl">My Agency</h1>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-4">
            <Link to="/" className="text-white hover:border-b hover:text-gray-300 py-1 px-1 text-md font-medium">Home</Link>
            <Link to="/about" className="text-white  hover:border-b  hover:text-gray-300 py-1 px-1 text-md font-medium">About</Link>
            <Link to="/services" className="text-white hover:border-b hover:text-gray-300 py-1 px-1 text-md font-medium">Services</Link>
            <Link to="/projects" className="text-white hover:border-b hover:text-gray-300 py-1 px-1 text-md font-medium">Projects</Link>
            <Link to="/careers" className="text-white hover:border-b hover:text-gray-300 py-1 px-1 text-md font-medium">Careers</Link>
            <Link to="/contact" className="text-white hover:border-b hover:text-gray-300 py-1 px-1 text-md font-medium">Contact</Link>
          </div>

          {/* Login Button on the Right */}
          <div className="hidden md:block">
            <Link to="/LoginForm" className="text-white bg-blue-700 hover:bg-blue-600 font-medium py-1 px-4 rounded transition duration-300">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center border-b-2 sm:px-3">
            <Link to="/" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/services" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/projects" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link to="/careers" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Careers</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
