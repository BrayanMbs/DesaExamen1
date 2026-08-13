import type { Product } from "@/modules/products/models/product.model";

export interface CartItem {
  product: Product;
  quantity: number;
}
