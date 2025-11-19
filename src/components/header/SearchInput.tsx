"use client";
import React, { FormEvent, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const term = search.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const handleClear = () => setSearch("");

  return (
    <form
      className="hidden md:inline-flex flex-1 h-10 relative"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for products..."
        className="h-full w-full border-2 border-themeColor  px-4 pr-10 outline-none focus:border-themeColor focus:ring-1 focus:ring-themeColor "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <IoClose
          onClick={handleClear}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl hover:text-red-600"
        />
      )}
      <button
        type="submit"
        className="absolute h-10 w-10 text-2xl bg-green-500 right-0 top-0 flex items-center justify-center text-white cursor-pointer hover:bg-green-400 duration-200">
        <IoMdSearch />
      </button>
    </form>
  );
};

export default SearchInput;
