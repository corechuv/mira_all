import React, { useMemo, useState } from 'react'

type Product = {
  id: number
  name: string
  category: string
  price: number
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Товар A', category: 'books', price: 10 },
  { id: 2, name: 'Товар B', category: 'electronics', price: 20 },
  { id: 3, name: 'Товар C', category: 'books', price: 15 },
]

export default function App() {
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const [cartMessage, setCartMessage] = useState('')

  const products = useMemo(() => {
    let items = PRODUCTS.filter((p) => filter === 'all' || p.category === filter)
    items = items.sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))
    return items
  }, [filter, sort])

  const addToCart = (product: Product) => {
    setCartMessage(`${product.name} добавлен в корзину`)
    setTimeout(() => setCartMessage(''), 2000)
  }

  return (
    <div className="app">
      <header>
        <h1>Клиент маркетплейса — MIRA</h1>
        <nav aria-label="Фильтры и сортировка">
          <label>
            Фильтр:
            <select
              aria-label="Фильтр товаров"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Все товары</option>
              <option value="books">Книги</option>
              <option value="electronics">Электроника</option>
            </select>
          </label>
          <label>
            Сортировка:
            <select
              aria-label="Сортировка товаров"
              value={sort}
              onChange={(e) => setSort(e.target.value as 'asc' | 'desc')}
            >
              <option value="asc">Цена ↑</option>
              <option value="desc">Цена ↓</option>
            </select>
          </label>
        </nav>
        {cartMessage && (
          <div role="status" aria-live="polite">
            {cartMessage}
          </div>
        )}
      </header>
      <main>
        <ul className="product-list">
          {products.map((p) => (
            <li key={p.id} className="product">
              <span>{p.name}</span>
              <span>{p.price} ₽</span>
              <button
                onClick={() => addToCart(p)}
                aria-label={`Добавить ${p.name} в корзину`}
              >
                Добавить в корзину
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <small>© 2024 MIRA</small>
      </footer>
    </div>
  )
}

