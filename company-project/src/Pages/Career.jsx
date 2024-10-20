import React from 'react';
import { Link } from 'react-router-dom';
import { ClockCircleOutlined, RiseOutlined, HeartOutlined } from '@ant-design/icons';

const Career = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className=" text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl mb-8">We are always looking for talented individuals to help us shape the future of technology.</p>
        </div>
      </section>

      <section className="py-16 bg-black bg-opacity-10 border-t  backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Flexible Work Hours */}
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <ClockCircleOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Flexible Work Hours</h3>
            <p className="text-gray-600">
              We understand the importance of work-life balance and provide flexible work arrangements to suit your needs.
            </p>
          </div>

          {/* Career Growth Opportunities */}
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <RiseOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Career Growth Opportunities</h3>
            <p className="text-gray-600">
              We support your personal and professional development with training, mentorship, and growth opportunities.
            </p>
          </div>

          {/* Comprehensive Health Benefits */}
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
            <HeartOutlined className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Comprehensive Health Benefits</h3>
            <p className="text-gray-600">
              Your well-being matters to us, and we offer comprehensive health plans to take care of you and your family.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Job Openings Section */}
      <section className="py-10  md:px-10 bg-black bg-opacity-10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Current Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Job 1 */}
            <div className="bg-white border bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold  mb-2">Frontend Developer</h3>
              <p className="text-gray-200 mb-4">We are looking for a skilled frontend developer with expertise in React.js and modern web technologies.</p>
              <ul className="list-disc pl-5 text-gray-200 mb-4">
                <li>Experience with JavaScript, HTML, CSS, and React.js</li>
                <li>Strong understanding of responsive design</li>
                <li>Ability to work in a team environment</li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">Apply Now</button>
            </div>

            {/* Job 2 */}
            <div className="bg-white bg-opacity-50 border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
              <p className="text-gray-600 mb-4">We are hiring a backend developer who is proficient in Node.js and cloud-based architecture.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Proficiency in Node.js, Express.js, and MongoDB</li>
                <li>Understanding of RESTful APIs</li>
                <li>Experience with cloud platforms like AWS or Azure</li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">Apply Now</button>
            </div>

            {/* Job 3 */}
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
              <p className="text-gray-600 mb-4">We are seeking a creative UI/UX designer to craft amazing digital experiences for our clients.</p>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Experience with Figma, Adobe XD, or Sketch</li>
                <li>Strong understanding of user-centered design principles</li>
                <li>Portfolio of previous design projects</li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" bg-black bg-opacity-10 backdrop-blur-md  py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
        <p className="mb-8">We’re excited to meet you! Apply today and start your journey with us.</p>
        <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">Submit Your Resume</Link>
      </section>
    </div>
  );
};

export default Career;
