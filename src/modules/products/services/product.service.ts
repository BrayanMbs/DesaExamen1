import { productDatabase } from "@/data/db";
import { ProductMapper } from "@/modules/products/mappers/product.mapper";
import type { Product } from "@/modules/products/models/product.model";
import { readLocalCollection } from "@/shared/services/local-data-client";

export async function getProducts(): Promise<Product[]> {
  const rawProducts = await readLocalCollection(productDatabase);
  return rawProducts.map(ProductMapper.toDomain);
}
