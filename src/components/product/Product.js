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
    }`
      )
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='Product'>
      {productData &&
        productData.map((product, index) => (
          <Link>
            <div key={index}>
              <h1>{product.title}</h1>
              <img src={urlFor(product.frontImage)} alt='image' width='200px' />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Product;
