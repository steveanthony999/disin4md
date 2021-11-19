import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
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
    <motion.div
      className='Product'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}>
      <Paper className='Product-container' elevation={8}>
        <div className='Product-left'>
          <img src={location.state.assets[0].url} alt='product' />
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
          <motion.button
            className='btn btn-primary'
            onClick={() => onAddToCart(location.state.id, 1, sizeId)}
            disabled={!isCartButtonActive}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.1,
                type: 'spring',
              },
            }}>
            ADD TO CART
          </motion.button>
        </div>
      </Paper>
    </motion.div>
  );
};

export default Product;
