import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardSideBar from "./CardSideBar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";
interface ProductCardProps {
  product: any;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 rounded-md px-3 py-5 duration-200 group overflow-hidden relative">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}>
        <Image
          src={product?.images[0]}
          alt={product?.title}
          height={500}
          width={500}
          priority={true}
          className="w-full h-64  object-contain hover:scale-110 transition-all duration-300"
        />
      </Link>
      <CardSideBar />
      <div className="pt-2 border-t border-gray-200">
        <p className=" absolute top-3 right-3 font-semibold bg-green-700 text-gray-100 px-3 py-1  w-max mb-2 rounded-bl-2xl rounded-tr-2xl">
          {product?.discountPercentage}%
        </p>
        <p className="text-gray-600 font-semibold capitalize line-clamp-1">
          {product?.category}
        </p>
        <h2 className="text-lg font-bold capitalize line-clamp-2">
          {product?.title}
        </h2>
        <ProductPrice product={product} />
        <p className="text-gray-600">{product?.rating}</p>
        <p className="text-gray-600">{product?.brand}</p>
        <p className="text-gray-600">{product?.availabilityStatus}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
