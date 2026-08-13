"use client";

import { useCart } from "@/modules/cart/hooks/useCart";
import { Button } from "@/shared/components/Button";
import { formatCurrency } from "@/shared/utils/currency";

export function CartSummary(): JSX.Element {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <aside className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-glow">
      <h2 className="text-lg font-bold text-white">Order Summary</h2>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between text-slate-300">
          <span>Total items</span>
          <span className="font-semibold text-white">{totalItems}</span>
        </div>
        <div className="flex justify-between border-t border-slate-800 pt-3 text-base font-bold text-white">
          <span>Total</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </div>
      <Button className="mt-5 w-full" disabled={totalItems === 0}>
        Checkout
      </Button>
      <Button className="mt-3 w-full" variant="ghost" onClick={clearCart} disabled={totalItems === 0}>
        Clear Cart
      </Button>
    </aside>
  );
}
