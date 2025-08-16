import React from 'react';
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, title: 'Product 1', price: '$10', image: 'https://via.placeholder.com/300x200?text=1' },
  { id: 2, title: 'Product 2', price: '$20', image: 'https://via.placeholder.com/300x200?text=2' },
  { id: 3, title: 'Product 3', price: '$30', image: 'https://via.placeholder.com/300x200?text=3' },
  { id: 4, title: 'Product 4', price: '$40', image: 'https://via.placeholder.com/300x200?text=4' },
  { id: 5, title: 'Product 5', price: '$50', image: 'https://via.placeholder.com/300x200?text=5' }
];

export default function App() {
  return (
    <Layout>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          title={p.title}
          price={p.price}
          onAdd={() => console.log(`Add ${p.title}`)}
        />
      ))}
    </Layout>
  );
}
