import './Product.css';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className='Product'>
      <h1>{product.name}</h1>
      <img src={product.assets[0].url} alt='' width='200px' />
      <p>${product.price.raw}</p>
    </div>
  );
};

export default Product;
