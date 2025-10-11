"use client";
import React, { use, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search..."
        className="h-full w-full border-2 border-themeColor  px-4 pr-10 outline-none focus:border-themeColor focus:ring-1 focus:ring-themeColor "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoClose
          onClick={() => setSearch("")}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl hover:text-red-600"
        />
      )}
      <span className="absolute h-10 w-10 text-2xl bg-green-500 right-0 top-0 flex items-center justify-center text-white cursor-pointer hover:bg-green-400 duration-200">
        <IoMdSearch />
      </span>
    </div>
  );
};

export default SearchInput;
