import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts, Product } from '../api/products';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
