import React from 'react';
import type { Product } from '../api/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 4, marginBottom: 12 }}>
      <h3 style={{ margin: '0 0 8px' }}>{product.title}</h3>
      <span>{product.price} ₽</span>
    </div>
  );
}
