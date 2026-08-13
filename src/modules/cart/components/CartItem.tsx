"use client";

import Image from "next/image";
import type { CartItem as CartItemModel } from "@/modules/cart/models/cart-item.model";
import { useCart } from "@/modules/cart/hooks/useCart";
import { Button } from "@/shared/components/Button";
import { formatCurrency } from "@/shared/utils/currency";

interface CartItemProps {
  item: CartItemModel;
}

export function CartItem({ item }: CartItemProps): JSX.Element {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const subtotal = item.product.price * item.quantity;

  return (
    <article className="grid gap-4 rounded-lg border border-slate-800 bg-slate-900/70 p-4 shadow-glow sm:grid-cols-[8rem_1fr_auto]">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-slate-950 sm:w-32">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          sizes="(min-width: 640px) 8rem, 100vw"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-normal text-cyan-300">{item.product.category}</p>
        <h2 className="mt-1 text-lg font-bold text-white">{item.product.name}</h2>
        <p className="mt-1 text-sm text-slate-400">{formatCurrency(item.product.price)} each</p>
        <p className="mt-3 text-sm font-semibold text-slate-200">Subtotal: {formatCurrency(subtotal)}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:justify-between">
        <div className="flex h-10 items-center rounded-md border border-slate-700 bg-slate-950">
          <button
            className="h-10 w-10 text-lg font-bold text-slate-200 transition hover:bg-slate-800"
            onClick={() => decreaseQuantity(item.product.id)}
            aria-label={`Decrease ${item.product.name} quantity`}
          >
            -
          </button>
          <span className="flex h-10 min-w-10 items-center justify-center px-2 text-sm font-bold text-white">
            {item.quantity}
          </span>
          <button
            className="h-10 w-10 text-lg font-bold text-slate-200 transition hover:bg-slate-800"
            onClick={() => increaseQuantity(item.product.id)}
            aria-label={`Increase ${item.product.name} quantity`}
          >
            +
          </button>
        </div>
        <Button variant="danger" onClick={() => removeItem(item.product.id)} aria-label={`Remove ${item.product.name}`}>
          Remove
        </Button>
      </div>
    </article>
  );
}
