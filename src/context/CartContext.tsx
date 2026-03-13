"use client";

import { ProductType } from "@/types/product";
import { createContext, useContext, useState } from "react";

type CartItem = ProductType & { qty: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  increaseCart: (productId: string) => void;
  decreaseCart: (productId: string) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ADD TO CART
  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // INCREASE QTY
  const increaseCart = (productId: string) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  // DECREASE QTY
  const decreaseCart = (productId: string) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === productId
          ? { ...p, qty: Math.max(1, p.qty - 1) }
          : p
      )
    );
  };

  // REMOVE ITEM
  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCart,
        decreaseCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};