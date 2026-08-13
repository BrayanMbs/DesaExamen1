"use client";

import { useContext } from "react";
import { CartContext } from "@/modules/cart/context/CartContext";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCart must be used inside CartProvider.");
  }

  return cartContext;
}
