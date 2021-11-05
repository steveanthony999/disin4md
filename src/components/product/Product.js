import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import sanityClient from '../../client.js';
import imageUrlBuilder from '@sanity/image-url';

import './Product.css';

const Product = () => {
  const [productData, setProduct] = useState(null);
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
        title,
        frontImage,
        price,
        status,
    }`
      )
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='Product'>
      {productData &&
        productData.map((product, index) => (
          <div key={index} className='Product-card'>
            <Link to='/'>
              <div className='Product-card-header'>
                <img src={urlFor(product.frontImage)} alt='' width='200px' />
              </div>
              <div className='Product-card-body'>
                <h1>{product.title}</h1>
              </div>
              <div className='Product-card-footer'>
                <p>${product.price}</p>
                <p
                  style={
                    product.status === 'Sold Out'
                      ? { color: 'red' }
                      : { color: 'green' }
                  }>
                  {product.status}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Product;
