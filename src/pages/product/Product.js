import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className='Product'>
      <h1>Product Page {location.state.id}</h1>
      <img src={location.state.assets[0].url} alt='' width='300px' />
    </div>
  );
};

export default Product;
