import type { ProductDTO } from "@/modules/products/dtos/product.dto";
import type { Product, ProductCategory } from "@/modules/products/models/product.model";

const categoryMap: Record<string, ProductCategory> = {
  components: "Components",
  peripherals: "Peripherals",
  monitors: "Monitors"
};

function normalizeText(value: string | undefined, fallback: string): string {
  const normalizedValue = value?.trim();
  return normalizedValue && normalizedValue.length > 0 ? normalizedValue : fallback;
}

function normalizePrice(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function normalizeStock(value: number): number {
  return Number.isInteger(value) && value > 0 ? value : 0;
}

function normalizeCategory(value: string): ProductCategory {
  return categoryMap[value.trim().toLowerCase()] ?? "Components";
}

export const ProductMapper = {
  toDomain(dto: ProductDTO): Product {
    return {
      id: dto.product_id,
      name: normalizeText(dto.product_name, "Unnamed Product"),
      description: normalizeText(dto.product_description, "No description available."),
      price: normalizePrice(dto.product_price),
      category: normalizeCategory(dto.product_category),
      image: normalizeText(dto.product_image, "/placeholder-product.png"),
      stock: normalizeStock(dto.product_stock)
    };
  }
};
