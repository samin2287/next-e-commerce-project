import React from "react";
import Container from "./Container";
import { banner } from "@/constants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
const Banner = () => {
  return (
    <div
      className="bg-cover no-repeat py-20 text-white"
      style={{ backgroundImage: `url(${banner.imageBg.src})` }}>
      <Container>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 items-center justify-center">
          <div className="col-span-2 ">
            {" "}
            <p className="mt-3 text-base sm:text-lg md:text-xl font-bold">
              {banner?.priceText}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-3 leading-tight">
              {banner?.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-semibold">
              {banner?.textOne}{" "}
              <span className="text-[#FFB800]">{banner?.offerPrice}</span>{" "}
              {banner?.textTwo}
            </p>
            <Button href="/product" className="mt-6">
              Shop now
              <FaArrowRight />
            </Button>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default Banner;
