import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import './Product.css';

const Product = () => {
  const [variant, setVariant] = useState([]);
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    commerce.products
      .getVariants(location.state.id)
      .then((variants) => setVariant(variants.data));
    //   .then(console.log(variant));
  }, []);

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
        </div>
      </div>
    </div>
  );
};

export default Product;
