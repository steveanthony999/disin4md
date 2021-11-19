import { motion } from 'framer-motion';

import Products from '../../components/products/Products';

import './Home.css';

const Home = ({ products }) => {
  return (
    <motion.div
      className='Home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}>
      <Products products={products} />
    </motion.div>
  );
};

export default Home;
