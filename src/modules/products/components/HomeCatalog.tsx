"use client";

import { useMemo, useState } from "react";
import { ProductFilters, type CategoryFilterOption } from "@/modules/products/components/ProductFilters";
import { ProductGrid } from "@/modules/products/components/ProductGrid";
import { ProductPagination } from "@/modules/products/components/ProductPagination";
import { useProducts } from "@/modules/products/hooks/useProducts";
import type { Product } from "@/modules/products/models/product.model";
import { sortProductsByPrice, type PriceSortOption } from "@/shared/utils/sorting";

const productsPerPage = 8;

export function HomeCatalog(): JSX.Element {
  const { products, isLoading, errorMessage } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterOption>("All");
  const [selectedSort, setSelectedSort] = useState<PriceSortOption>("none");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const visibleProducts = useMemo<Product[]>(() => {
    const filteredProducts =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return sortProductsByPrice(filteredProducts, selectedSort);
  }, [products, selectedCategory, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / productsPerPage));
  const normalizedCurrentPage = Math.min(currentPage, totalPages);
  const firstProductIndex = (normalizedCurrentPage - 1) * productsPerPage;
  const paginatedProducts = visibleProducts.slice(firstProductIndex, firstProductIndex + productsPerPage);

  function handleCategoryChange(category: CategoryFilterOption): void {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handleSortChange(sortOption: PriceSortOption): void {
    setSelectedSort(sortOption);
    setCurrentPage(1);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-cyan-300">Computer Hardware Store</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            ByteMarket
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Build faster systems with curated graphics cards, processors, memory, storage, monitors, and gaming
            peripherals.
          </p>
        </div>

        <div className="rounded-lg border border-cyan-400/20 bg-slate-900/80 p-5 shadow-glow">
          <p className="text-sm font-semibold text-slate-300">Live catalog</p>
          <p className="mt-2 text-3xl font-black text-cyan-200">{products.length}</p>
          <p className="mt-1 text-sm text-slate-400">Products loaded through the service, mapper, and domain layers.</p>
        </div>
      </div>

      <ProductFilters
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-96 animate-pulse rounded-lg bg-slate-900/70" />
          ))}
        </div>
      ) : null}

      {errorMessage ? (
        <div className="rounded-lg border border-red-500/50 bg-red-950/50 p-4 text-sm font-semibold text-red-100">
          {errorMessage}
        </div>
      ) : null}

      {!isLoading && !errorMessage ? (
        <>
          <ProductGrid products={paginatedProducts} />
          <ProductPagination
            currentPage={normalizedCurrentPage}
            totalItems={visibleProducts.length}
            totalPages={totalPages}
            itemsPerPage={productsPerPage}
            onPageChange={setCurrentPage}
          />
        </>
      ) : null}
    </section>
  );
}
