import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { commerce } from './lib/commerce';

import './App.css';

function App() {
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
    <div className='App'>
      {/* <Navbar /> */}
      <Products products={products} />
    </div>
  );
}

export default App;
