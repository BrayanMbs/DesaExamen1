"use client";

import { createContext, useMemo, useState } from "react";
import type { CartItem } from "@/modules/cart/models/cart-item.model";
import type { Product } from "@/modules/products/models/product.model";

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addProduct: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);

  function addProduct(product: Product): void {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);

      if (!existingItem) {
        return [...currentItems, { product, quantity: 1 }];
      }

      return currentItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  function increaseQuantity(productId: number): void {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(productId: number): void {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(productId: number): void {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  }

  function clearCart(): void {
    setItems([]);
  }

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      totalPrice,
      addProduct,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart
    }),
    [items, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
