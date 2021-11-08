const CartItem = ({ item }) => {
  return (
    <div className='CartItem'>
      <img src={item.media} alt={item.name} />
      <h2>{item.name}</h2>
      <h2>{item.line_total.formatted_with_symbol}</h2>
      <div className='CardItem-buttons'>
        <button>-</button>
        <p>{item.quantity}</p>
        <button>+</button>
      </div>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
