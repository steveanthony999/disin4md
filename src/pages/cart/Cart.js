import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

import './Cart.css';

const Cart = ({ cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty }) => {
  const EmptyCart = () => <h1>Your cart is empty</h1>;

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
          <button onClick={onEmptyCart}>Empty Cart</button>
          <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        </div>
        <Link to='/checkout'>
          <button className='btn-full'>Checkout</button>
        </Link>
      </div>
    </>
  );

  if (!cart.line_items) {
    return 'Loading...';
  }

  return (
    <div className='Cart'>
      <Paper className='Cart-container' elevation={8}>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Paper>
    </div>
  );
};

export default Cart;
