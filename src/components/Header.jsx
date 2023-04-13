import { useId } from 'react';

export default function Header({ setFilter, products }) {
  const idPrice = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);

    const dateFilter = products.filter(fil => fil.price >= dataForm.get('price'));
    setFilter(dateFilter);
  };

  return (
    <header>
      <h2>Shopping card</h2>
      <form className='search' onSubmit={handleSubmit}>
        <label htmlFor={idPrice}>Precio minimo</label>
        <input type="text" id={idPrice} placeholder='min precio' name='price' />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
}
