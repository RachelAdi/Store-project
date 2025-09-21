import React, { useEffect, useState } from "react";
import { getProducts, Product } from "./Service/productsService";

export default function StoreItems() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const result = getProducts();
    setProducts(result);
  }, []);

  console.log("products state:", products);

  return null; 
}
