"use client";

import Link from "next/link";
import { CartItem } from "@/modules/cart/components/CartItem";
import { CartSummary } from "@/modules/cart/components/CartSummary";
import { useCart } from "@/modules/cart/hooks/useCart";
import { EmptyState } from "@/shared/components/EmptyState";

export function CartPageContent(): JSX.Element {
  const { items } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-cyan-300">Shopping Cart</p>
          <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Your selected hardware</h1>
        </div>
        <Link
          href="/"
          className="inline-flex min-h-10 w-full items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 transition hover:bg-slate-700 sm:w-auto"
        >
          Continue Shopping
        </Link>
      </div>

      {items.length === 0 ? (
        <EmptyState
          title="Your cart is empty"
          description="Add graphics cards, processors, peripherals, or monitors from the catalog to start a build."
          action={
            <Link
              href="/"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Browse Products
            </Link>
          }
        />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </section>
  );
}
