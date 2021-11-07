import { useState, useEffect } from 'react';
import Products from '../../components/products/Products';
import { commerce } from '../../lib/commerce';

import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className='Home'>
      <Products products={products} />
    </div>
  );
};

export default Home;
