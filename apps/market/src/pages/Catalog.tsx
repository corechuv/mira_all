import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Catalog() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
