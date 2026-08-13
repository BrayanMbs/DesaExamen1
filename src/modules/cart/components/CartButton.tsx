"use client";

import Link from "next/link";
import { useCart } from "@/modules/cart/hooks/useCart";

export function CartButton(): JSX.Element {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex min-h-10 items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
      aria-label={`Open cart with ${totalItems} items`}
    >
      Cart
      <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-400 px-2 text-xs font-bold text-slate-950">
        {totalItems}
      </span>
    </Link>
  );
}
