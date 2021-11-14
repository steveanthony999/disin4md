const Review = ({ checkoutToken }) => {
  return (
    <div className='Review'>
      <h1>Order Summary</h1>
      <ul>
        {checkoutToken.live.line_items.map((product) => (
          <li key={product.name}>
            {product.name} {product.quantity}{' '}
            {product.line_total.formatted_with_symbol}
          </li>
        ))}
        <li>{checkoutToken.live.subtotal.formatted_with_symbol}</li>
      </ul>
    </div>
  );
};

export default Review;
