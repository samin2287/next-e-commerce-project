import React from "react";
import Container from "../Container";
import { navItems } from "@/constants";
import Link from "next/link";

const BottomHeader = () => {
  return (
    <div className="border-b border-b-gray-400">
      <Container className="flex items-center justify-between py-1">
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 px-4 text-sm text-gray-700 hover:text-green-400 hover:bg-gray-100 font-semibold transition-all duration-100">
              {item.title}
            </Link>
          ))}
          <Link
            href="/signin"
            className="block py-2 px-4 text-sm text-gray-700 hover:text-green-400 hover:bg-gray-100 font-semibold transition-all duration-100">
            Please sign in to view your cart{" "}
          </Link>
        </div>
        <p className="text-sm font-semibold text-gray-400">
          Hotline: <span className="text-black">+88 123-4567</span>
        </p>
      </Container>
    </div>
  );
};

export default BottomHeader;
