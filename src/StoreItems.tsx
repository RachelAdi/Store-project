// src/StoreItems.tsx
import React, { useEffect, useState } from "react";
import { getProducts, Product } from "./Service/productsService";

export default function StoreItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Store Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              width="100"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            />
            <p>
              <b>Price:</b> ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
