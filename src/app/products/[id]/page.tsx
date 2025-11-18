import React from "react";
import { getdata } from "@/helpers";
import Container from "@/components/Container";
import ProductImage from "@/components/ProductImages";
import { ProductType } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { IoMdStar } from "react-icons/io";

import { FaRegEye } from "react-icons/fa";
import PriceFormat from "@/components/PriceFormat";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import { payment } from "@/assets";

interface Props {
  params: Promise<{ id: string }>;
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getdata(endpoint);

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductImage image={product?.images} />
      <div>
        <h1 className="text-4xl text-gray-700 font-bold">{product?.title}</h1>
        <div className=" flex items-center justify-between mt-3 text-md font-semibold mt-2 text-blue-400">
          <ProductPrice product={product} />
          <div className="flex justify-center items-center text-black">
            <div className=" flex font-bold text-xl">
              {/* Star Rating Function Start */}
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <>
                    <IoMdStar
                      key={index}
                      className={`${
                        filled
                          ? "text-yellow-600"
                          : halfFilled
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </>
                );
              })}
              {/* Star Rating Function End */}
            </div>
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )})reviews`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye />{" "}
          <span className="text-md ml-1 my-3 font-bold text-black">250+</span>
          peoples are viewing this right now
        </p>

        <p>
          You are saving{" "}
          <PriceFormat
            className="text-green-600 px-1 font-semibold"
            amount={product?.discountPercentage / 100}
          />
          upon purchase
        </p>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="text-md py-1">{product?.description}</p>
          <p className="text-md  text-gray-500 capitalize">
            Warranty:{" "}
            <span className="font-semibold! text-md text-gray-600">
              {product?.warrantyInformation}
            </span>
          </p>
          {product?.brand && (
            <p className="text-md text-gray-500 capitalize">
              Brand:{" "}
              <span className="font-semibold text-md text-gray-600">
                {product.brand}
              </span>
            </p>
          )}
          <p className="text-md text-gray-500 capitalize">
            Category:{" "}
            <span className="font-semibold! text-md  text-gray-600">
              {product?.category}
            </span>
          </p>
          <p className="text-md text-gray-500 capitalize">
            Tags:{" "}
            <span className="font-semibold! text-md text-gray-600">
              {product?.tags?.map((item, index) => (
                <span key={index} className="font-medium capitalize">
                  {item} {index < product?.tags?.length - 1 && ","}
                </span>
              ))}
            </span>
          </p>
          <AddToCartButton
            product={product}
            className="rounded-full uppercase py-2 cursor-pointer"
          />
          <div className="flex items-center justify-center">
            <Image
              src={payment}
              alt="Payment Methods"
              className="w-full max-w-xs rounded-xl cursor-pointer "
            />
          </div>
        </div>
      </div>
      <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10">
        {product?.reviews?.map((item) => (
          <div
            key={item?.reviewerName}
            className="bg-white/80 p-5 border-[1px] border-amber-400 rounded-md hover:border-amber-600 hover:bg-white duration-200 flex flex-col gap-1">
            <p>{item?.comment}</p>
            <div className="text-xs">
              <p className="font-semibold">{item?.reviewerName}</p>
              <p>{item?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < item?.rating
                        ? "text-yellow-500"
                        : "text-lightText"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
