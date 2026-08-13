"use client";

import type { PriceSortOption } from "@/shared/utils/sorting";

export type CategoryFilterOption = "All" | string;

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: CategoryFilterOption;
  selectedSort: PriceSortOption;
  onCategoryChange: (category: CategoryFilterOption) => void;
  onSortChange: (sortOption: PriceSortOption) => void;
}

export function ProductFilters({
  categories,
  selectedCategory,
  selectedSort,
  onCategoryChange,
  onSortChange
}: ProductFiltersProps): JSX.Element {
  return (
    <section className="mb-8 rounded-lg border border-slate-800 bg-slate-900/70 p-4 shadow-glow">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <label className="text-sm font-semibold text-slate-300" htmlFor="category-filter">
            Category
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                className={`min-h-10 rounded-md px-4 text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-950 text-slate-300 ring-1 ring-slate-700 hover:text-white"
                }`}
                onClick={() => onCategoryChange(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-64">
          <label className="text-sm font-semibold text-slate-300" htmlFor="price-sort">
            Sort by price
          </label>
          <select
            id="price-sort"
            value={selectedSort}
            onChange={(event) => onSortChange(event.target.value as PriceSortOption)}
            className="mt-2 min-h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm font-semibold text-slate-100 outline-none transition focus:border-cyan-300"
          >
            <option value="none">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
}
