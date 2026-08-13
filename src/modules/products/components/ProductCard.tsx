"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/modules/cart/hooks/useCart";
import type { Product } from "@/modules/products/models/product.model";
import { Button } from "@/shared/components/Button";
import { formatCurrency } from "@/shared/utils/currency";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { addProduct } = useCart();
  const [wasAdded, setWasAdded] = useState<boolean>(false);

  function handleAddProduct(): void {
    addProduct(product);
    setWasAdded(true);
    window.setTimeout(() => setWasAdded(false), 900);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900/70 shadow-glow transition hover:-translate-y-1 hover:border-cyan-400/70">
      <div className="relative h-56 overflow-hidden bg-slate-950 sm:aspect-[4/3] sm:h-auto">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105 sm:p-4"
        />
        <span className="absolute left-3 top-3 rounded-md bg-slate-950/85 px-3 py-1 text-xs font-bold text-cyan-200 ring-1 ring-cyan-300/30">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h2 className="line-clamp-2 text-base font-bold leading-6 text-white sm:text-lg">{product.name}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400 sm:line-clamp-3">{product.description}</p>
        </div>

        <div className="mt-4 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:mt-5">
          <div>
            <p className="text-xs text-slate-500">Stock: {product.stock}</p>
            <p className="text-xl font-black text-cyan-200">{formatCurrency(product.price)}</p>
          </div>
          <Button className="w-full min-[420px]:w-auto" onClick={handleAddProduct} aria-label={`Add ${product.name} to cart`}>
            {wasAdded ? "Added" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </article>
  );
}
