import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative group">
        <div className="w-full h-full flex justify-center items-center p-4">
          {/* Image */}
          <img
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
            src={image}
            alt={title}
          />
        </div>
        {/* Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => addToCart(product, id)}
            className="flex justify-center items-center text-white w-10  h-10 bg-black  rounded-full shadow-lg transition-transform transform hover:scale-110"
            aria-label="Add to cart"
          >
            <BsPlus className="text-2xl" />
          </button>
          <Link
            to={`/product/${id}`}
            className="flex justify-center items-center w-10 h-10 bg-white text-black border border-black rounded-full shadow-lg transition-transform transform hover:scale-110"
            aria-label="View product"
          >
            <BsEyeFill className="text-xl" />
          </Link>
        </div>
      </div>
      {/* Category, Title & Price */}
      <div className="p-4">
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 hover:text-teal-500 transition-colors">{title}</h2>
        </Link>
        <h2 className="font-bold text-lg text-teal-600">${price}</h2>
      </div>
    </div>
  );
};

export default Product;
