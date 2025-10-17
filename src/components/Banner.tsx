import React from "react";
import Container from "./Container";
import { banner } from "@/constants";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-20 text-white">
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
            <Link
              href={banner.buttonLink}
              className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-md hover:bg-[#115061] hover:text-white transition-all duration-300 shadow-sm group">
              {banner.buttonText}
              <FaArrowRightLong className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="col-span-2 col-start-3 md:justify-end flex justify-center items-center">
            {" "}
            <Image
              src={banner.image}
              alt={banner.title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
