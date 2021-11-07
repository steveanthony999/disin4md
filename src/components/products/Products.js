import Product from '../product/Product';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className='Products'>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
