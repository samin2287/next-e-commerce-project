import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
interface AddToCartButtonProps {
  className?: string;
  product?: string;
}
const AddToCartButton = ({ className, product }: AddToCartButtonProps) => {
  return (
    <button
      className={twMerge(
        " flex items-center py-1 justify-center bg-green-300 w-full rounded-md text-xl font-semibold hover:bg-green-500 hover:translate-y-[-5px] hover:text-white transition-all duration-300",
        className
      )}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
