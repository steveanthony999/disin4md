import './Cart.css';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  return (
    <div className='CartItem'>
      <img src={item.image.url} alt={item.name} />
      <p>{item.name}</p>
      <p>Size {item.variant.description}</p>
      <p>{item.line_total.formatted_with_symbol}</p>
      <div className='CardItem-buttons'>
        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
          -
        </button>
        <p>{item.quantity}</p>
        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
