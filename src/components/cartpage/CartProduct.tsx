"use client";

import React from "react";
import { ProductType } from "../../../type";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/CounterSlice";
import Link from "next/link";

interface CartProductProps {
  product: ProductType;
}

const CartProduct = ({ product }: CartProductProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeFromCart(product.id));
  const handleIncrease = () => dispatch(increaseQuantity(product.id));
  const handleDecrease = () => dispatch(decreaseQuantity(product.id));

  const qty = product.quantity || 1;
  const subtotal = (product.price * qty).toFixed(2);

  return (
    <div className="flex gap-4 items-center border-b py-4">
      <div className="w-28 h-28 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}>
          <img
            src={
              product.thumbnail ||
              product.images?.[0] ||
              "/assets/logo/placeholder.png"
            }
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center border rounded">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 hover:bg-gray-200"
              aria-label="decrease">
              -
            </button>
            <div className="px-4">{qty}</div>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 hover:bg-gray-200"
              aria-label="increase">
              +
            </button>
          </div>
          <div className="font-semibold">${product.price.toFixed(2)}</div>
          <div className="text-gray-700">Subtotal: ${subtotal}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={handleRemove}
          className="text-sm text-red-500 hover:underline">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
