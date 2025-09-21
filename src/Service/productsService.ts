export interface Product {
  title: string;
}

export function getProducts(): Product[] {
  return [{ title: "Product 1" }];
}
