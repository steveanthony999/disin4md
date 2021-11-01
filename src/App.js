import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/product/Product';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
