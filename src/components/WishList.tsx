"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartButton from "./AddToCartButton";
import { ProductType, stateType } from "../../type";
import { removeFromFavorite } from "@/redux/CounterSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: stateType) => state.shop.favorite || []);

  if (!favorite.length) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-6">
          Browse the catalog and tap the heart icon to save products for later.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Your Wishlist</h1>
        <p className="text-gray-600">
          You have {favorite.length} saved {favorite.length === 1 ? "item" : "items"}.
        </p>
      </div>
      <div className="space-y-4">
        {favorite.map((product: ProductType) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <Link
              className="relative w-full sm:w-40 h-48 sm:h-auto flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden"
              href={{
                pathname: `/products/${product.id}`,
                query: { id: product.id },
              }}>
              <Image
                src={
                  product.thumbnail ||
                  product.images?.[0] ||
                  "/assets/logo/placeholder.png"
                }
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-full object-contain"
                priority={false}
              />
            </Link>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <p className="text-sm uppercase text-gray-500">
                    {product.brand}
                  </p>
                  <h3 className="text-xl font-semibold capitalize">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromFavorite(product.id))}
                  className="text-sm font-medium text-red-500 hover:text-red-600">
                  Remove
                </button>
              </div>

              <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
                <span>${product.price.toFixed(2)}</span>
                <span className="text-sm font-medium text-green-600">
                  Save {product.discountPercentage}% today
                </span>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <AddToCartButton product={product} className="w-auto px-6" />
                <Link
                  href={{
                    pathname: `/products/${product.id}`,
                    query: { id: product.id },
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
