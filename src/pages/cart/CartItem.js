const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  return (
    <div className='CartItem'>
      <img src={item.media} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Size M</p>
      <h2>{item.line_total.formatted_with_symbol}</h2>
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
