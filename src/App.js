import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import './App.css';
import Home from './pages/home/Home';
import Product from './pages/product/Product';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
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
