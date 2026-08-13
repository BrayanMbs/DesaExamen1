export interface ProductDTO {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  stock: number;
}

export interface ProductsApiResponseDTO {
  products: ProductDTO[];
  total: number;
  skip: number;
  limit: number;
}
