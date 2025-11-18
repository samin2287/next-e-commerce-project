import React from "react";
import Container from "../Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Container className=" py-1 flex items-center justify-between">
        <p
          className=" w-full md:w-auto text-sm flex items-center gap-2 justify-center
         md:justify-normal font-medium py-1">
          <CiDeliveryTruck className="text-2xl" />
          <span className="font-semibold">
            Free Express Shipping on orders over $500+
          </span>
        </p>
        <div className="hidden md:inline-flex items-center gap-1 text-white text-sm">
          <p className="headerTopMenu">
            English <IoIosArrowDown className="text-lg mt-[1px] pl-1" />
          </p>
          <p className="headerTopMenu">
            USD <IoIosArrowDown className="text-lg mt-[1px] pl-1" />
          </p>
          <p className="headerTopMenu">
            Settings <IoIosArrowDown className="text-lg mt-[1px] pl-1" />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
