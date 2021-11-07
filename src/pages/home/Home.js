import Products from '../../components/products/Products';

import './Home.css';

const Home = ({ products }) => {
  return (
    <div className='Home'>
      <Products products={products} />
    </div>
  );
};

export default Home;
