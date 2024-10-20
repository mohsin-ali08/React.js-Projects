import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="relative text-white">
      {/* Blur effect layer */}
      <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-md"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10"> {/* Added z-10 to keep the content on top */}
        <div className="flex flex-col md:flex-row justify-between items-start py-10 px-5">
          {/* Brand Section */}
          <div className="mb-6 sm:mb-0 w-full md:w-1/2 pr-5">
            <h2 className="font-bold text-xl">My Agency</h2>
            <p className="text-sm text-gray-300 mb-2 overflow-hidden whitespace-normal text-justify">
              Our mission is to deliver innovative and reliable software solutions that help businesses grow and thrive in the digital world.
              Our vision is to be a global leader in technology, consistently pushing the boundaries of innovation while upholding the highest standards of quality and customer satisfaction.
            </p>
            <p className="text-sm text-gray-400"># PAKISTAN</p>
          </div>

          {/* Services Section */}
          <div className="mb-6 sm:mb-0 w-full md:w-1/4">
            <h3 className="font-bold text-lg">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Graphic Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-6 sm:mb-0 w-full md:w-1/4">
            <h3 className="font-bold text-lg">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest news and offers.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-2 border-b border-white outline-none rounded mb-2 sm:mb-0 sm:mr-2 bg-white bg-opacity-40 text-white"
              />
              <button
                className="bg-white text-black font-semibold rounded py-2 px-2 hover:bg-gray-200 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
      <div className="border-t flex justify-center items-center py-3 bg-white bg-opacity-30">
        <p className="text-sm text-white">
          © 2024 My Agency. All rights reserved;
          <a href="https://www.linkedin.com/in/mohsin-ali08/" className="text-black font-semibold text-sm hover:text-white"> _MOSHIN</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
