import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[600px] bg-hero bg-no-repeat   bg-cover bg-center py-20">
      <div className="container flex flex-col mx-auto justify-center h-full ">
        <div className=" bg-white  bg-opacity-10 md:h-[300px] rounded px-5 py-5 border ">
          <div className="font-semibold flex items-center text-white uppercase">
            <div className="w-10 h-[2px] mr-3 bg-white "></div>Hot Trend
          </div>
          <h1 className="uppercase text-white text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fresh Fashion Finds<br />
          <span className="font-light text-white">new collection</span></h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-white text-white'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
