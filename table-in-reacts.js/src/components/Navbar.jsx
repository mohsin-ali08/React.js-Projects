import React from 'react';
import Logo from '../assets/download.png'; // Adjust the import path as needed

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center px-10 bg-custom-gradient py-2 opacity-60'>
      <img src={Logo} alt="Logo" className='w-12 md:w-13 h-12 md:h-13 rounded-full mb-3 md:mb-0' />
      <div className="flex flex-row md:flex-row gap-5 md:gap-8 font-semibold text-center md:text-left">
        <a href="#" className='hover:text-black text-white '>HOME</a>
        <a href="#" className='hover:text-black text-white'>ABOUT</a>
        <a href="#" className='hover:text-black text-white'>CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
