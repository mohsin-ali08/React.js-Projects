import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from '../assets/project-1.png'
import Project2 from '../assets/project-2.jpg'
import Project3 from '../assets/project-3.webp'
import Project4 from '../assets/project-4.png'
import Project5 from '../assets/project-5.png'
import Project6 from '../assets/project-6.avif'

const Projects = () => {
  return (
    <div>
      <section className=" text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg md:text-xl mb-8">Explore the innovative solutions we’ve delivered to our clients.</p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 bg-black bg-opacity-10 border-t border-b backdrop-blur-sm px-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project1} alt="Project 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Project Management Tool</h3>
              <p className="text-gray-600 mb-4">A web-based project management tool designed to enhance team collaboration and productivity.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>

            {/* Project 2 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project2} alt="Project 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">A fully functional e-commerce platform with a seamless user experience and advanced features.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>

            {/* Project 3 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project3} alt="Project 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Banking App</h3>
              <p className="text-gray-600 mb-4">A secure and user-friendly mobile banking application for managing finances on-the-go.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>

            {/* Project 4 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project4} alt="Project 4" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Dashboard</h3>
              <p className="text-gray-600 mb-4">An analytics dashboard for managing and monitoring social media performance.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>

            {/* Project 5 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project5} alt="Project 5" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Health Tracking App</h3>
              <p className="text-gray-600 mb-4">A mobile app designed to help users track their health metrics and stay fit.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>

            {/* Project 6 */}
            <div className="bg-white bg-opacity-80 border-2 p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={Project6} alt="Project 6" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">Real Estate Website</h3>
              <p className="text-gray-600 mb-4">An interactive platform for buying, selling, and renting properties with advanced search features.</p>
              <a href="#" className="text-indigo-500 font-bold hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=" bg-black bg-opacity-10 backdrop-blur-md  py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Interested in Working With Us?</h2>
        <p className="mb-8">Let’s discuss how we can help you achieve your goals.</p>
        <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">Contact Us</Link>
      </section>
    </div>
  );
};

export default Projects;
