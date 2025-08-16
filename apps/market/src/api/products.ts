export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface ProductList {
  items: Product[];
  total: number;
}

export async function fetchProducts(): Promise<ProductList> {
  const response = await fetch('/api/v1/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json() as Promise<ProductList>;
}
