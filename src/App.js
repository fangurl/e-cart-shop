import React from 'react'
import { Route } from 'react-router';
import Home from './pages/Home';


function App() {
  return (
  //   <CartProvider>
  //   <Container>
  //     <Navbar />
  //     <Switch>

        <div>
        <Route path="/" exact>
          <Home />
        </Route>
        </div>

  //       <Route path="/category/:id" exact>
  //         <Category />
  //       </Route>
  //       <Route path="/checkout" exact>
  //         <Checkout />
  //       </Route>
  //     </Switch>
  //   </Container>
  // </CartProvider>


 
  );
}

export default App;
