import { useId } from 'react';
import useFilterContext from '../hooks/useFilterContext';

export default function Header({ setFilter, products }) {
  const idPrice = useId();
  const { filterProducts } = useFilterContext();

  return (
    <header>
      <h2>Shopping card</h2>
      <form className='search' onSubmit={filterProducts}>
        <label htmlFor={idPrice}>Precio minimo</label>
        <input type="text" id={idPrice} placeholder='min precio' name='price' />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
}
