import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export default function useFilterContext() {
  const { filter, setFilter, products } = useContext(FiltersContext);

  const filterProducts = (e) => {
    e.preventDefault();
    const Form = new FormData(e.target);
    const filtersProduct = products.filter(
      (product) => product.price >= Form.get('price')
    );

    setFilter(filtersProduct);
  };

  return { filterProducts, products, filter };
}
