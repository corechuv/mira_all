import React from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 4 }}>
      <h3 style={{ margin: '0 0 8px' }}>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <p style={{ margin: 0 }}>{product.price.toFixed(2)} ₽</p>
    </div>
  )
}
