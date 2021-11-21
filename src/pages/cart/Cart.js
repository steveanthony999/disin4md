import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import './Cart.css';

const Cart = ({ cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty }) => {
  const EmptyCart = () => (
    <div className='empty'>
      <SentimentVeryDissatisfiedOutlinedIcon fontSize='large' />
      <br />
      <p>So empty</p>
    </div>
  );

  const FilledCart = () => (
    <>
      {cart.line_items.map((item) => (
        <div key={item.id}>
          <CartItem
            item={item}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCartQty={onUpdateCartQty}
          />
        </div>
      ))}
      <div className='Cart-info'>
        <div className='Cart-info-top'>
          <motion.div
            className='btn-remove'
            onClick={onEmptyCart}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.1,
                type: 'spring',
              },
            }}>
            <RemoveShoppingCartOutlinedIcon />
          </motion.div>
          <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        </div>
        <Link to='/checkout'>
          <motion.button
            className='btn-full'
            whileHover={{
              scale: 1.01,
              transition: {
                duration: 0.1,
                type: 'spring',
              },
            }}>
            CHECKOUT
          </motion.button>
        </Link>
      </div>
    </>
  );

  if (!cart.line_items) {
    return 'Loading...';
  }

  return (
    <motion.div
      className='Cart'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}>
      <Paper className='Cart-container' elevation={8}>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Paper>
    </motion.div>
  );
};

export default Cart;
