import './Home.css';

import Product from '../../components/product/Product';

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-image'>
        <Product />
      </div>
    </div>
  );
};

export default Home;
