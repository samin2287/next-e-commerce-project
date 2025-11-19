import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardSideBar from "./CardSideBar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";
import { ProductType } from "../../type";
import { CiStar } from "react-icons/ci";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const imageSrc =
    product.images?.[0] || product.thumbnail || "/assets/logo/placeholder.png";

  return (
    <div className="relative rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="block">
        <div className="relative flex h-56 w-full items-center justify-center rounded-2xl bg-gray-50 overflow-hidden">
          <Image
            src={imageSrc}
            alt={product?.title}
            height={320}
            width={320}
            priority={false}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 shadow">
            {product?.availabilityStatus || "In stock"}
          </span>
        </div>
      </Link>

      <CardSideBar product={product} />

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="font-semibold text-gray-900 uppercase tracking-wide">
            {product?.brand}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-0.5 text-xs text-yellow-700 font-semibold">
            <CiStar className="text-base" />
            {product?.rating.toFixed(1)}
          </span>
        </div>
        <h2 className="text-lg font-bold leading-tight text-gray-900 line-clamp-2">
          {product?.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product?.description}
        </p>
        <ProductPrice product={product} />
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Min qty: {product?.minimumOrderQuantity}</span>
        <span>{product?.warrantyInformation}</span>
      </div>

      <AddToCartButton product={product} className="mt-4" />
    </div>
  );
};

export default ProductCard;
