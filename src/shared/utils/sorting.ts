import type { Product } from "@/modules/products/models/product.model";

export type PriceSortOption = "none" | "low-to-high" | "high-to-low";

export function sortProductsByPrice(products: Product[], sortOption: PriceSortOption): Product[] {
  const sortedProducts = [...products];

  if (sortOption === "low-to-high") {
    return sortedProducts.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price);
  }

  if (sortOption === "high-to-low") {
    return sortedProducts.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
  }

  return sortedProducts;
}
