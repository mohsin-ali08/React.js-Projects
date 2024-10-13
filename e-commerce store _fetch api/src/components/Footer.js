import React from "react";

import bgImage from "../img/Hero_section.jpg"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="relative py-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: "blur(1px)",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/70 opacity-10"></div>

      <div className="relative container mx-auto z-10">
        <p className="text-white text-center text-lg md:text-xl ">
          Copyright &copy; 🤍 2024. All rights reserved.{" "}
          <span className="font-semibold text-yellow-300 hover:text-gray-400 cursor-pointer">
            <a href="https://www.linkedin.com/in/mohsin-ali08/">MOHSIN ALI</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;



