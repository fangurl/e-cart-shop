import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Categories from './pages/Categories'
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import { CartProvider } from './lib/cart.context';
import Navbar from './components/Navbar';



function App() {
  return (
  
    <CartProvider>
    <Container>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:id" exact>
          <Categories />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
      </Switch>
    </Container>
  </CartProvider>

  );
}

export default App;
