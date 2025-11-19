"use client";

import Link from "next/link";
import React from "react";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { ProductType, stateType } from "../../type";
import { addToCart, toggleFavorite } from "@/redux/CounterSlice";

interface CardSideBarProps {
  product: ProductType;
}

const CardSideBar = ({ product }: CardSideBarProps) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: stateType) => state.shop.favorite || []);
  const cart = useSelector((state: stateType) => state.shop.cart || []);
  const isFavorite = favorite.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);
  const productLabel = product.title.substring(0, 12);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
    toast.success(
      `${productLabel} ${
        isFavorite ? "removed from" : "added to"
      } wishlist`.trim()
    );
  };

  const handleQuickAddToCart = () => {
    if (isInCart) {
      toast.success(`${productLabel} is already in the cart`);
      return;
    }
    dispatch(addToCart(product));
    toast.success(`${productLabel} added to cart`);
  };

  return (
    <div className="absolute top-15 right-1 flex flex-col gap-1 transform translate-x-6 opacity-0 pointer-events-none group-hover:translate-x-0 group-hover:opacity-100 group-hover:pointer-events-auto duration-300 z-40">
      <button
        type="button"
        onClick={handleQuickAddToCart}
        className="p-1 border border-gray-100 rounded-md bg-gray-100 hover:bg-white">
        <MdOutlineShoppingCart className="text-4xl cursor-pointer hover:text-green-500 duration-200" />
      </button>
      <button
        type="button"
        onClick={handleToggleFavorite}
        className="p-1 border border-gray-100 rounded-md bg-gray-100 hover:bg-white">
        {isFavorite ? (
          <MdOutlineFavorite className="text-4xl text-red-500 duration-200" />
        ) : (
          <MdOutlineFavoriteBorder className="text-4xl hover:text-green-500 duration-200" />
        )}
      </button>
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="p-1 border border-gray-100 rounded-md bg-gray-100 hover:bg-white"
        aria-label="View product details">
        <MdOutlineRemoveRedEye className="text-4xl cursor-pointer hover:text-green-500 duration-200" />
      </Link>
    </div>
  );
};

export default CardSideBar;
