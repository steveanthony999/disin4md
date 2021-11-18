import { motion } from 'framer-motion';

import Products from '../../components/products/Products';

import './Home.css';

const Home = ({ products }) => {
  return (
    <motion.div
      className='Home'
      exit={{ x: '-100vw', transition: { ease: 'easeInOut' } }}>
      <Products products={products} />
    </motion.div>
  );
};

export default Home;
