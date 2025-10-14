import React from "react";
import Container from "../Container";
import { logo } from "@/assets";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import HeaderIcons from "./HeaderIcons";
import MobileNavigation from "./MobileNavigation";

const MiddleHeader = () => {
  return (
    <div className="border-b-[1px] border-b-gray-700">
      <Container className="py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-28 " />
        </Link>
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-3">
          <Link href="/signin" className="flex gap-2">
            <div className="border-2 border-green-500 p-1.5 rounded-full text-2xl text-green-500 ">
              <FaUserCircle />
            </div>
            <div>
              <p className="text-sm text-gray-700 font-medium">Sign In</p>
              <p className="text-sm text-gray-700 font-medium">Account</p>
            </div>
          </Link>
          <HeaderIcons />
        </div>
        <MobileNavigation />
      </Container>
    </div>
  );
};

export default MiddleHeader;
