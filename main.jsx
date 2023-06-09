import { createRoot } from 'react-dom/client';
import App from './src/App';
import { FilterProvider } from './src/context/filters';

createRoot(document.getElementById('app')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
