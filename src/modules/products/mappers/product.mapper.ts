import type { ProductDTO } from "@/modules/products/dtos/product.dto";
import type { Product, ProductCategory } from "@/modules/products/models/product.model";

const categoryMap: Record<string, ProductCategory> = {
  components: "Components",
  peripherals: "Peripherals",
  monitors: "Monitors",
  laptops: "Components",
  smartphones: "Peripherals",
  tablets: "Monitors",
  "mobile-accessories": "Peripherals"
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
      id: dto.id,
      name: normalizeText(dto.title, "Unnamed Product"),
      description: normalizeText(dto.description, "No description available."),
      price: normalizePrice(dto.price),
      category: normalizeCategory(dto.category),
      image: normalizeText(dto.thumbnail, "/placeholder-product.png"),
      stock: normalizeStock(dto.stock)
    };
  }
};
