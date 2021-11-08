import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  return (
    <Link
      to={{
        pathname: `/${product.id}`,
        state: product,
      }}>
      <div className='Product'>
        <div className='Product-card'>
          <div className='Product-card-header'>
            <img src={product.assets[0].url} alt='' width='200px' />
          </div>
          <div className='Product-card-body'>
            <h1>{product.name}</h1>
          </div>
          <div className='Product-card-footer'>
            <p>${product.price.raw}</p>
            <p
              style={{
                color: product.inventory.available > 0 ? 'green' : 'red',
              }}>
              {product.inventory.available > 0 ? 'In Stock' : 'Sold Out'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
