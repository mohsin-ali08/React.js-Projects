import React from 'react';
import { Link } from 'react-router-dom'; 
import Aboutbg from '../assets/Aboutbg.jpg'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg';
import Team3 from '../assets/team3.jpg';

const About = () => {
  return (
    <div>
   <section 
      className="bg-cover bg-center  text-white py-24 flex justify-center items-center"
    >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl mb-8">
            We are a forward-thinking software company providing cutting-edge solutions for businesses worldwide.
          </p>
        </div>
    </section>

      {/* Our Mission & Vision Section */}
      <section className="py-10 px-5 bg-black bg-opacity-10 border-t  backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl font-bold mb-8 text-white ">Our Mission & Vision</h2>
          <p className="text-gray-300 mb-4  ">Our mission is to deliver innovative and reliable software solutions that help businesses grow and thrive in the digital world.Our vision is to be a global leader in technology, consistently pushing the boundaries of innovation while upholding the highest standards of quality and customer satisfaction.</p>
          <p className="text-gray-700"></p>
        </div>
      </section>

     {/* Team Members Section */}
<section className="py-5 px-5 bg-black bg-opacity-10  backdrop-blur-sm ">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-8 text-white">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Team Member 1 */}
      <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
        <img src={Team1} alt="Team Member 1" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <h3 className="text-xl font-bold">Muhammed Abbas</h3>
        <p className="text-gray-700 mb-2">CEO & Founder</p>
        <p className="text-gray-600">John is a visionary leader with 10+ years of experience in software development and business strategy.</p>
      </div>

      {/* Team Member 2 */}
      <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
        <img src={Team2} alt="Team Member 2" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <h3 className="text-xl font-bold">Mohsin Ali</h3>
        <p className="text-gray-700 mb-2">Lead Developer</p>
        <p className="text-gray-600">Jane is an expert in full-stack development and leads our development team in building cutting-edge solutions.</p>
      </div>

      {/* Team Member 3 */}
      <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
        <img src={Team3} alt="Team Member 3" className="w-32 h-32 mx-auto rounded-full mb-4" />
        <h3 className="text-xl font-bold">Yasir Raza</h3>
        <p className="text-gray-700 mb-2">UI/UX Designer</p>
        <p className="text-gray-600">Michael ensures that all of our products are visually stunning and user-friendly with his creative design skills.</p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-16 px-5 bg-black bg-opacity-10  backdrop-blur-sm ">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
              <p className="text-gray-600">Our team consists of seasoned professionals with expertise in various fields of software development.</p>
            </div>
            <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="text-gray-600">We prioritize our clients' needs and work closely with them to deliver tailored solutions.</p>
            </div>
            <div className="bg-white bg-opacity-80 border-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Innovation & Quality</h3>
              <p className="text-gray-600">We consistently push the boundaries of innovation while ensuring top-notch quality in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" bg-black bg-opacity-10 backdrop-blur-md py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
        <p className="mb-8">We are ready to help your business thrive with our software solutions. Let's build something great together!</p>
        <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">Contact Us</Link>
      </section>
    </div>
  );
};

export default About;
