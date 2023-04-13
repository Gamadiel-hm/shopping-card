import productsJ from './mocks/products.json';
import './app.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

export default function App() {
  const [products] = useState(productsJ.products);
  const [filter, setfilter] = useState(null);
  return (
    <>
      <Header setFilter={setfilter} products={products} />
      <Main product={filter === null ? products : filter} />
    </>
  );
}
