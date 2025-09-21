
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const STORAGE_KEY = "products_cache";
export async function getProducts(): Promise<Product[]> {
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    console.log("Returning products from localStorage");
    return JSON.parse(cached) as Product[];
  }
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await response.json();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  console.log("Fetched products from API and saved to localStorage");

  return data;
}
