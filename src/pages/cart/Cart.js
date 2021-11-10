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
      <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
      <button onClick={onEmptyCart}>Empty Cart</button>
      <Link to='/checkout'>
        <button>Checkout</button>
      </Link>
    </>
  );

  if (!cart.line_items) {
    return 'Loading...';
  }

  return (
    <div className='Cart'>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;
