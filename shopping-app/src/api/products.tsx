import { Product } from "@/components/ProductType";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:5000/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchProductsById(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:5000/api/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
