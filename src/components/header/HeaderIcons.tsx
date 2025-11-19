"use client";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { stateType } from "../../../type";

const HeaderIcons = () => {
  const { cart, favorite } = useSelector((state: stateType) => state?.shop);

  return (
    <div className="flex items-center gap-5">
      <Link href="/wishlist" className="relative">
        <MdFavoriteBorder className="text-3xl text-green-700 " />
        <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-medium bg-red-500 text-white rounded-full flex items-center justify-center">
          {favorite?.length > 0 ? favorite?.length : 0}
        </span>
      </Link>
      <Link href="/cart" className="relative">
        <FaCartArrowDown className="text-3xl text-green-700" />
        <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-medium bg-red-500 text-white rounded-full flex items-center justify-center">
          {cart?.length > 0 ? cart?.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default HeaderIcons;
