import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import './Product.css';

const Product = ({ product }) => {
  const [variant, setVariant] = useState([]);
  const [totalInventory, setTotalInventory] = useState([]);

  useEffect(() => {
    commerce.products.getVariants(product.id).then((x) => setVariant(x.data));
  }, [product.id]);

  useEffect(() => {
    const totals = variant.reduce((total, item) => {
      return total + item.inventory;
    }, 0);

    setTotalInventory(totals);
  }, [variant, totalInventory]);

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
            <p style={{ color: totalInventory > 0 ? 'green' : 'red' }}>
              {totalInventory > 0 ? 'In Stock' : 'Sold Out'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
