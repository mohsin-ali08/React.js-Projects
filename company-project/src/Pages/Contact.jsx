import React from 'react';
import { PhoneOutlined, MailOutlined, HomeOutlined, ArrowRightOutlined, } from '@ant-design/icons';
const ContactUs = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className=" text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl mb-8">We'd love to hear from you! Please fill out the form below to reach out to us.</p>
        </div>
      </section>

      {/* Contact Form and Map Location Section */}
      <section className="py-16 md:px-10 bg-black bg-opacity-10 border-t border-b backdrop-blur-md">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row">
            {/* Contact Form */}
            <div className="md:w-1/2  border  p-8 rounded-lg shadow-lg mr-4">
              <h2 className="text-3xl font-bold mb-12 text-white">Contact Form</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block mb-2 text-white" htmlFor="name">Name :</label>
                    <input
                    placeholder='Your Name:'
                      type="text"
                      id="name"
                      className="border bg-white bg-opacity-50  backdrop-blur-sm border-none text-white  rounded-lg w-full p-3 focus:outline-none "
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-white" htmlFor="email">Email :</label>
                    <input
                      type="email"
                      placeholder='Your Email:'
                      id="email"
                      className="border bg-white bg-opacity-50  backdrop-blur-sm border-none text-white  rounded-lg w-full p-3 focus:outline-none "
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block mb-2 text-white" htmlFor="message">Message :</label>
                  <textarea
                    id="message"
                    placeholder='write something ?'                    rows="5"
                 className="border bg-white bg-opacity-50  backdrop-blur-sm border-none text-white  rounded-lg w-full p-3 focus:outline-none "
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-6 bg-black text-white border hover:text-black font-bold py-3 px-6 rounded hover:bg-gray-300 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Location */}
            <div className="md:w-1/2 border  rounded-lg shadow-lg h-100 px-5">
              <h2 className="text-3xl font-bold text-white text-center py-6">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.1256497906893!2d67.0966347!3d24.9306863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b5cdbbc095%3A0x3bd5f577d2e87a59!2sSaylani%20Welfare%20Trust%2C%20Gulshan%20Branch!5e0!3m2!1sen!2sus!4v1697759043210!5m2!1sen!2sus"
                width="100%"
                height="80%"
                style={{ border: 0, overflow:'hidden', }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 text-white border-t bg-black bg-opacity-10 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center space-x-4">
          <span>Contact Information</span>
          <ArrowRightOutlined className="text-2xl" />
        </h2>
          
          {/* Phone */}
          <div className="mb-8 md:mb-0">
            <PhoneOutlined className="text-4xl mb-2 text-white" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">021-111-729-526</p>
          </div>
          
          {/* Email */}
          <div className="mb-8 md:mb-0">
            <MailOutlined className="text-4xl mb-2 text-white" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">info@SaylaniWelfare.com</p>
          </div>

          {/* Address */}
          <div className="mb-8 md:mb-0">
            <HomeOutlined className="text-4xl mb-2 text-white" />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-300">Saylani Welfare Trust, Gulshan Branch</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUs;
