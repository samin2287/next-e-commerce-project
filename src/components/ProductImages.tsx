"use client";

import React, { useState } from "react";
import Image from "next/image";
interface Props {
  image?: string[];
}
const ProductImages = ({ image }: Props) => {
  const [currantImage, setCurrantImage] = useState(image?.[0] || "");
  return (
    <div className="flex flex-start gap-4">
      <div className="flex flex-col gap-2">
        {image?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`productImage-${index}`}
            width={150}
            height={150}
            className={`cursor-pointer p-2  bg-gray-100 rounded-md w-28 h-28 object-contain opacity-80 hover:opacity-100 duration-200 ${
              currantImage === item
                ? "border-2 border-gray-200 opacity-100"
                : ""
            }`}
            onClick={() => setCurrantImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[550px] border-gray-200 shadow-sm flex items-center justify-center cursor-pointer">
        {image?.[0] ? (
          <Image
            src={currantImage}
            alt="productImage"
            width={400}
            height={400}
            className="object-contain w-full h-full "
          />
        ) : (
          <p className="text-gray-500 text-sm">No image found</p>
        )}
      </div>
    </div>
  );
};

export default ProductImages;
