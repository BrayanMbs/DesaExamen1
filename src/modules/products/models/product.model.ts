export type ProductCategory = "Components" | "Peripherals" | "Monitors";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  stock: number;
}
