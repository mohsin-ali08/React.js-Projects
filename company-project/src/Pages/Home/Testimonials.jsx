const Testimonials = () => {
    return (
      <div className="py-10 bg-black bg-opacity-70 border-b border-t px-5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-8">What Our Clients Say?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700">"The team at My Agency exceeded our expectations with their custom software solution. We're thrilled with the results!"</p>
              <h4 className="mt-4 font-bold">- Muhammad Abbas</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700">"Their mobile app development services are top-notch. Highly recommend them for any mobile project."</p>
              <h4 className="mt-4 font-bold">- Yasir Raza</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700">"Their mobile app development services are top-notch. Highly recommend them for any mobile project."</p>
              <h4 className="mt-4 font-bold">- Alim Mughal</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  