import React from 'react'

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-4 bg-black bg-opacity-40 border-t ">
        <h2 className="text-4xl text-white font-bold text-center mb-10 py-5 ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          <div className="p-6 bg-white bg-opacity-50 border text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold border-b pb-2 mb-4">Web Development</h3>
            <p className="text-gray-800">We create responsive and performant web applications using modern technologies like React, Node.js, and more.</p>
          </div>
          <div className="p-6 bg-white bg-opacity-50 border text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold border-b pb-2 mb-4">Mobile App Development</h3>
            <p className="text-gray-800">Get cutting-edge mobile applications built for Android and iOS platforms.</p>
          </div>
          <div className="p-6 bg-white bg-opacity-50 border text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold border-b pb-2 mb-4">Cloud Solutions</h3>
            <p className="text-gray-800">We offer scalable cloud infrastructure to help you deploy, manage, and scale your applications.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
