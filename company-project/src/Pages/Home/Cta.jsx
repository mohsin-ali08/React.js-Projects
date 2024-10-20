import { Link } from 'react-router-dom'; 

const CTA = () => {
  return (
    <div className=" py-12 text-center text-white  bg-black bg-opacity-10 backdrop-blur-md ">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-8">Contact us today to discuss your next project.</p>
      <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">Contact Us</Link> {/* Use Link here */}
    </div>
  );
};

export default CTA;
