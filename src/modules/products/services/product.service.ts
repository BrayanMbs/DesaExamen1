import type { ProductDTO, ProductsApiResponseDTO } from "@/modules/products/dtos/product.dto";
import { ProductMapper } from "@/modules/products/mappers/product.mapper";
import type { Product } from "@/modules/products/models/product.model";

const PRODUCTS_API_URL = "https://dummyjson.com/products?limit=100";
const technicalCategories = new Set(["laptops", "smartphones", "tablets", "mobile-accessories"]);

function isProductDTO(value: unknown): value is ProductDTO {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as ProductDTO;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.title === "string" &&
    typeof candidate.description === "string" &&
    typeof candidate.price === "number" &&
    typeof candidate.category === "string" &&
    typeof candidate.thumbnail === "string" &&
    typeof candidate.stock === "number"
  );
}

function isProductsApiResponseDTO(value: unknown): value is ProductsApiResponseDTO {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as ProductsApiResponseDTO;
  return Array.isArray(candidate.products);
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API_URL);

  if (!response.ok) {
    throw new Error("Products API request failed.");
  }

  const data: unknown = await response.json();

  if (!isProductsApiResponseDTO(data)) {
    throw new Error("Products API returned an invalid response.");
  }

  return data.products
    .filter(isProductDTO)
    .filter((product) => technicalCategories.has(product.category.trim().toLowerCase()))
    .slice(0, 12)
    .map(ProductMapper.toDomain);
}
