import Product from '../product/Product';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className='Products'>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
