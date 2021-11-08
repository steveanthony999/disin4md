import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import './Product.css';

const Product = ({ onAddToCart }) => {
  const [variant, setVariant] = useState([]);
  const [sizeId, setSizeId] = useState();
  const location = useLocation();

  useEffect(() => {
    setVariant(location.state.variant_groups[0].options);
  }, [variant]);

  const handleChange = (e) => {
    setSizeId(e.target.value);
  };

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
            {variant.map((x) => (
              <option value={x.id} key={x.name}>
                {x.name}
              </option>
            ))}
          </select>
          <button onClick={() => onAddToCart(location.state.id, 1, sizeId)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
