import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

// Import your background image

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  // Destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="relative rounded-lg shadow-lg  bg-white bg-opacity-50 backdrop-blur-sm px-4 ">
      <div className="flex gap-x-4  lg:px-6 border-b border-gray-200 w-full font-light text-red-500">
        <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
          {/* Image */}
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px] rounded-lg shadow" src={image} alt={title} />
          </Link>
          <div className="w-full flex flex-col">
            {/* Title and remove icon */}
            <div className="flex justify-between mb-2">
              {/* Title */}
              <Link
                to={`/product/${id}`}
                className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline "
              >
                {title}
              </Link>
              {/* Remove icon */}
              <div
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer"
              >
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </div>
            </div>
            <div className="flex gap-x-2 h-[36px] text-sm">
              {/* Quantity */}
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                <div onClick={() => decreaseAmount(id)} className="h-full flex-1 flex justify-center items-center hover:bg-white cursor-pointer">
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {amount}
                </div>
                <div onClick={() => increaseAmount(id)} className="h-full flex flex-1 justify-center items-center hover:bg-white  cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>
              {/* Item price */}
              <div className="flex flex-1 justify-around items-center">
                $ {price}
              </div>
              {/* Final price */}
              <div className="flex flex-1 justify-end items-center text-primary font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
