"use client";

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ProductType, stateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/CounterSlice";
import { toast } from "react-hot-toast";

interface AddToCartButtonProps {
  product: ProductType;
  className?: string;
}

const AddToCartButton = ({ product, className }: AddToCartButtonProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: stateType) => state?.shop.cart);

  const isInCart = cart.some((item: ProductType) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
      toast.success(
        `${product.title.substring(0, 10)} successfully added to cart!`
      );
    }
  };

  return isInCart ? (
    <Link
      href="/cart"
      className={twMerge(
        "flex items-center py-1 justify-center bg-blue-400 w-full rounded-md text-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300",
        className
      )}>
      Go to Cart
    </Link>
  ) : (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "flex items-center py-1 justify-center bg-green-300 w-full rounded-md text-xl font-semibold hover:bg-green-500 hover:translate-y-[-5px] hover:text-white transition-all duration-300",
        className
      )}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
