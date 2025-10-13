import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";

const HeaderIcons = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href="/favorites" className="relative">
        <MdFavoriteBorder className="text-3xl text-green-700 " />
        <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-medium bg-red-500 text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
      <Link href="/cart" className="relative">
        <FaCartArrowDown className="text-3xl text-green-700" />
        <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-medium bg-red-500 text-white rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};

export default HeaderIcons;
