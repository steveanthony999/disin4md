import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './components/product/Product';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
