"use client";

import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  product: ProductType;
};
export default function Cart({ product }: Props) {
  const { addToCart } = useCart();
  const handleCart = () => {
    addToCart(product);
    toast.success("Added to cart");
  }
  return (
    <div>
      <button
        className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:bg-gray-800 transition"
        onClick={handleCart}
      >
        <ShoppingCart size={18} />
      </button>
    </div>
  );
}
