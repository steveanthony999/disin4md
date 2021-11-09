import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

import './Product.css';

const Product = ({ onAddToCart }) => {
  const [variant, setVariant] = useState([]);
  const [sizeId, setSizeId] = useState();
  const [isCartButtonActive, setIsCartButtonActive] = useState(false);
  const location = useLocation();

  const handleChange = (e) => {
    setSizeId(e.target.value);
    if (e.target.value === null) {
      setIsCartButtonActive(false);
    } else {
      setIsCartButtonActive(true);
    }
  };

  useEffect(() => {
    commerce.products
      .getVariants(location.state.id)
      .then((x) => setVariant(x.data));
  }, [location.state.id]);

  return (
    <div className='Product'>
      <div className='Product-container'>
        <div className='Product-left'>
          <img src={location.state.assets[0].url} alt='' width='300px' />
        </div>
        <div className='Product-right'>
          <h1>{location.state.name}</h1>
          <p>${location.state.price.raw} USD</p>
          <p
            dangerouslySetInnerHTML={{
              __html: location.state.description,
            }}></p>
          <select name='sizes' onChange={handleChange}>
            {isCartButtonActive ? null : (
              <option value={null} id='sizes'>
                --Select Size
              </option>
            )}
            {variant.map((x) => (
              <option
                value={x.id}
                key={x.id}
                id='sizes'
                disabled={x.inventory > 0 ? false : true}>
                {x.description}
              </option>
            ))}
          </select>
          <button
            onClick={() => onAddToCart(location.state.id, 1, sizeId)}
            disabled={!isCartButtonActive}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
