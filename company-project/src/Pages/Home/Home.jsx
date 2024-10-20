import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Services from './Services';
import Testimonials from './Testimonials';
import Projects from './Projects';
import CTA from './Cta';
import "../../App.css"
const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/contact'); 
  };

  return (
    <div>
      <section 
        className="relative  text-white py-36 text-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">We Build Innovative Software Solutions</h1>
          <p className="text-lg md:text-xl mb-8">Your one-stop solution for modern, scalable, and high-quality software development.</p>
          <button
            onClick={handleGetStarted} // Attach the click event
            className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>

      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
