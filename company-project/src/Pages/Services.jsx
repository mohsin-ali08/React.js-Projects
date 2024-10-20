import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../assets/Service1.png'
import Service2 from '../assets/service2.jpg'
import Service3 from '../assets/service3.jpg'
import Service4 from '../assets/service4.jpg'
import Service5 from '../assets/service5.jpg'
import Service6 from '../assets/Service6.png'
const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <section   className="bg-cover bg-center text-white py-24 flex justify-center items-center">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl mb-8">We provide a wide range of software solutions tailored to your business needs.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-black bg-opacity-10 border-t border-b backdrop-blur-sm">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service1} alt="Service 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
              <p className="text-gray-600">We build tailor-made software solutions to meet your business requirements and streamline your workflow.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service2} alt="Service 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-600">Our team designs and develops mobile apps that offer seamless user experiences on all devices.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service3} alt="Service 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">We create beautiful, responsive websites that help your business make an impactful online presence.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service4} alt="Service 4" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Our design team ensures that every digital product we create is visually stunning and user-friendly.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service5} alt="Service 5" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">We provide scalable and secure cloud-based solutions to help your business grow and stay flexible.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Service6} alt="Service 6" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
              <p className="text-gray-600">Our consulting services help you implement cutting-edge technology and optimize your business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" bg-black bg-opacity-10 backdrop-blur-md  py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="mb-8">Get in touch with us, and we'll help you find the best technology solutions for your business!</p>
        <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">Contact Us</Link>
      </section>
    </div>
  );
};

export default Services;
