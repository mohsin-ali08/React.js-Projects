import React from 'react';

// Import your project images
import project1Image from '../../assets/project1.jpg';
import project2Image from '../../assets/project2.avif';
import project3Image from '../../assets/project3.png';

const Projects = () => {
  return (
    <div className="py-16 bg-black bg-opacity-40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white border-b pb-4 text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {/* Project 1 */}
          <div className="bg-white bg-opacity-80 border p-6 rounded-lg shadow-lg">
            <img src={project1Image} alt="Portfolio Website" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-700">A visually appealing portfolio website showcasing a range of projects and skills.</p>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white bg-opacity-80 border p-6 rounded-lg shadow-lg">
            <img src={project2Image} alt="E-Commerce Store" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">E-Commerce Store</h3>
            <p className="text-gray-700">A complete online shopping platform with product listings and payment integration.</p>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white bg-opacity-80 border p-6 rounded-lg shadow-lg">
            <img src={project3Image} alt="Mobile App" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Mobile App</h3>
            <p className="text-gray-700">A task management mobile app designed for iOS and Android users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
