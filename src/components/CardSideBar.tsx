import React from "react";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
  MdOutlineShoppingCart,
} from "react-icons/md";

const CardSideBar = () => {
  return (
    <div className="absolute top-15 right-1 flex flex-col gap-1 transform translate-x-20 group-hover:translate-x-0  duration-300 z-40">
      <button className="p-1 border-1 border-gray-100 rounded-md bg-gray-100">
        <MdOutlineShoppingCart className="text-4xl cursor-pointer hover:text-green-500  duration-200" />
      </button>
      <button className="p-1 border-1 border-gray-100 rounded-md bg-gray-100">
        <MdOutlineFavoriteBorder className="text-4xl cursor-pointer hover:text-green-500  duration-200" />
      </button>
      <button className="p-1 border-1 border-gray-100 rounded-md bg-gray-100">
        <MdOutlineRemoveRedEye className="text-4xl cursor-pointer hover:text-green-500  duration-200" />
      </button>
    </div>
  );
};

export default CardSideBar;
