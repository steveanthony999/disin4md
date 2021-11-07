import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home products={products} />
          </Route>
          <Route path='/:id'>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
