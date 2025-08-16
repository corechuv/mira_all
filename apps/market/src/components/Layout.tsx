import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const containerStyle: React.CSSProperties = {
  maxWidth: 720,
  margin: '40px auto',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  marginBottom: 24,
}

export default function Layout() {
  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <Link to="/">Каталог</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
      <Outlet />
    </div>
  )
}
