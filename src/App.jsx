import products from './mocks/products.json';
import './app.css';
import { useId } from 'react';

export default function App() {
  const idPrice = useId();

  return (
    <>
      <header>
        <h2>Shopping card</h2>
        <div className='search'>
          <label htmlFor={idPrice}>Precio minimo</label>
          <input type="text" id={idPrice} />
        </div>
      </header>
      <main className='container'>
        <ul className='products'>
          {
            products.products.map(product => (
              <li className='product' key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img src={product.images[0]} alt={product.description} />
                <label htmlFor="">Precio : ${product.price}</label>
                <p>Cantidades disponibles: {product.stock}</p>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}
