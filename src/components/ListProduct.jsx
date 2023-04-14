export default function ListProduct({ products }) {
  return (
    <>
      {
        products.map(product => (
          <li className='product' key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.images[0]} alt={product.description} />
            <label htmlFor="">Precio : ${product.price}</label>
            <p>Cantidades disponibles: {product.stock}</p>
          </li>
        ))
      }
    </>
  );
}
