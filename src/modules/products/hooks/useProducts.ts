"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/modules/products/models/product.model";
import { getProducts } from "@/modules/products/services/product.service";

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  errorMessage: string | null;
}

export function useProducts(): ProductsState {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts(): Promise<void> {
      try {
        setIsLoading(true);
        const loadedProducts = await getProducts();

        if (isMounted) {
          setProducts(loadedProducts);
          setErrorMessage(null);
        }
      } catch {
        if (isMounted) {
          setErrorMessage("Products could not be loaded.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, isLoading, errorMessage };
}
