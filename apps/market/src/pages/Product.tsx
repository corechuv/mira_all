import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div>Товар не найден</div>
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price.toFixed(2)} ₽</p>
    </div>
  )
}
