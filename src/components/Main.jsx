import useFilterContext from '../hooks/useFilterContext';
import ListProduct from './ListProduct';

export default function Main() {
  const { products, filter } = useFilterContext();
  return (
    <main className='container'>
      <ul className="products">
        {
          filter === null
            ? <ListProduct products={products} />
            : <ListProduct products={filter} />
        }
      </ul>
    </main>
  );
}
