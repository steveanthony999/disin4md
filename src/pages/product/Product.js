import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useLocation } from 'react-router-dom';
import data from '../../data';
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
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}>
      <Paper className='Product-container' elevation={8}>
        <div className='Product-left'>
          <img src={location.state.assets[0].url} alt='product' />
        </div>
        <div className='Product-right'>
          <h1>{location.state.name}</h1>
          <h4
            dangerouslySetInnerHTML={{
              __html: location.state.description,
            }}></h4>
          <br />
          <ul>
            <li>{data[0].nextLevel.weight}</li>
            <li>{data[0].nextLevel.gsmSingles}</li>
            <li>{data[0].nextLevel.shrink}</li>
            <li>{data[0].nextLevel.shoulder}</li>
            <li>{data[0].nextLevel.sleeves}</li>
            <li>{data[0].nextLevel.fit}</li>
          </ul>
          <br />
          <p>${location.state.price.raw} USD</p>
          <br />
          <select className='select-full' name='sizes' onChange={handleChange}>
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
            className={isCartButtonActive ? 'btn-full' : 'btn-full-disabled'}
            onClick={() => onAddToCart(location.state.id, 1, sizeId)}
            disabled={!isCartButtonActive}
            whileHover={
              isCartButtonActive && {
                scale: 1.01,
                transition: {
                  duration: 0.1,
                  type: 'spring',
                },
              }
            }>
            {isCartButtonActive ? 'ADD TO CART' : 'SELECT A SIZE'}
          </motion.button>
        </div>
      </Paper>
    </motion.div>
  );
};

export default Product;
