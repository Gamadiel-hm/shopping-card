import { createContext, useState } from 'react';
import initialProducts from '../mocks/products.json';

export const FiltersContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(null);
  const [products] = useState(initialProducts.products);

  return (
    <FiltersContext.Provider value={
      { filter, setFilter, products }
    }>
      {children}
    </FiltersContext.Provider>
  );
}
