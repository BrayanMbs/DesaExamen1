"use client";

import Link from "next/link";
import { CartButton } from "@/modules/cart/components/CartButton";

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ByteMarket home">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400 text-lg font-black text-slate-950">
            B
          </span>
          <span className="text-lg font-black tracking-normal text-white sm:text-xl">ByteMarket</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-white sm:inline-flex"
          >
            Home
          </Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
