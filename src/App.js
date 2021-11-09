import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

import { commerce } from './lib/commerce';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity, variantId) => {
    const item = await commerce.cart.add(productId, quantity, variantId);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar cart={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Home products={products} />
          </Route>
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              onEmptyCart={handleEmptyCart}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route path='/:id'>
            <Product onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
