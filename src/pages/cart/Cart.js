import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ cart }) => {
  const EmptyCart = () => <h1>Your cart is empty</h1>;

  const FilledCart = () => (
    <>
      {cart.line_items.map((item) => (
        <div key={item.id}>
          <CartItem item={item} />
        </div>
      ))}
      <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
      <button>Empty Cart</button>
      <button>Checkout</button>
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
