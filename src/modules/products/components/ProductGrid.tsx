import type { Product } from "@/modules/products/models/product.model";
import { EmptyState } from "@/shared/components/EmptyState";
import { ProductCard } from "@/modules/products/components/ProductCard";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps): JSX.Element {
  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try another category or price order to keep building your setup."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
