"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cartpage/CartProduct";
import { stateType } from "../../../type";
import Link from "next/link";
import Container from "@/components/Container";
const CartPage = () => {
  const cart = useSelector((state: stateType) => state.shop.cart || []);

  const shippingOptions = [
    {
      id: "standard",
      label: "Standard (3-5 days)",
      eta: "Arrives by Wed",
      cost: 6.99,
    },
    {
      id: "express",
      label: "Express (1-2 days)",
      eta: "Arrives by Mon",
      cost: 14.99,
    },
    { id: "pickup", label: "Store pickup today", eta: "Ready in 2h", cost: 0 },
  ];
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);

  const total = cart.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0);
  const grandTotal = total + selectedShipping.cost;

  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-[0.25em]">
            Shopping bag
          </p>
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <p className="text-gray-500">
            Review your items, choose a shipping method, and continue to
            checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg">Your cart is empty.</p>
            <Link
              href="/"
              className="mt-4 inline-block text-blue-600 underline">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>

            <aside className="p-6 border rounded-2xl bg-gray-50 space-y-6">
              <div>
                <h2 className="font-semibold text-xl">Order Summary</h2>
                <p className="text-sm text-gray-500">
                  {cart.length} item{cart.length > 1 ? "s" : ""} in your bag
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {selectedShipping.cost === 0
                      ? "Free"
                      : `$${selectedShipping.cost.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-3 text-gray-800">
                  Choose your shipping
                </p>
                <div className="space-y-3">
                  {shippingOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between rounded-xl border p-3 cursor-pointer transition ${
                        selectedShipping.id === option.id
                          ? "border-green-500 bg-white shadow-sm"
                          : "border-gray-200"
                      }`}>
                      <div>
                        <p className="font-medium">{option.label}</p>
                        <p className="text-sm text-gray-500">{option.eta}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">
                          {option.cost === 0
                            ? "Free"
                            : `$${option.cost.toFixed(2)}`}
                        </span>
                        <input
                          type="radio"
                          name="shipping"
                          checked={selectedShipping.id === option.id}
                          onChange={() => setSelectedShipping(option)}
                          className="accent-green-600"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
                  Proceed to Checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
