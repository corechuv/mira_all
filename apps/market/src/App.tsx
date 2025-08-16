import React from 'react'
import Catalog from './components/Catalog'

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <h1 style={{ marginBottom: 8 }}>Клиент маркетплейса — MIRA</h1>
      <p style={{ lineHeight: 1.6 }}>
        Пустой шаблон на Vite + React + TypeScript. Здесь можно строить UI.
      </p>
      <ul>
        <li><code>npm run dev</code> — запуск dev-сервера</li>
        <li><code>npm run build</code> — сборка</li>
        <li><code>npm run preview</code> — предпросмотр сборки</li>
      </ul>
      <Catalog />
    </div>
  )
}
