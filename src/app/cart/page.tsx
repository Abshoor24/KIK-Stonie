"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Buy from "@/components/Button/Buy";

export default function CartPage() {
  const { cart, increaseCart, decreaseCart, removeItem } = useCart();

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 max-w-6xl mx-auto p-8 w-full">
        <h1 className="text-3xl font-semibold mb-6">Your cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-6">

            {/* EMPTY CART */}
            {cart.length === 0 && (
              <div className="h-64 flex items-center justify-center text-gray-500">
                Your cart is empty
              </div>
            )}

            {/* CART LIST */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border-b pb-6 items-start"
              >
                {/* PRODUCT IMAGE */}
                <Image
                  src={item.image}
                  alt={item.name}
                  height={96}
                  width={96}
                  className="w-24 h-24 object-cover"
                />

                {/* PRODUCT INFO */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.name}</h2>

                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>

                  {/* QTY CONTROL */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseCart(item.id)}
                      className="border px-3 py-1"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseCart(item.id)}
                      className="border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-500 underline mt-2"
                  >
                    Remove
                  </button>
                </div>

                {/* PRICE */}
                <div className="font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="border p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            {/* COUPON */}
            <input
              type="text"
              placeholder="Enter coupon code here"
              className="w-full border p-2 mb-4"
            />

            {/* SUBTOTAL */}
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* SHIPPING */}
            <div className="flex justify-between text-sm mb-4 text-gray-500">
              <span>Shipping</span>
              <span>Calculated at the next step</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold mb-6">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* CHECKOUT BUTTON */}
            <Buy />
          </div>
        </div>
      </div>
    </div>
  );
}