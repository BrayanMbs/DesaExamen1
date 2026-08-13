import type { RawCategoryDTO } from "@/shared/dtos/common.dto";

export interface ProductDTO {
  product_id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_category: RawCategoryDTO;
  product_image: string;
  product_stock: number;
}
