import React, { Component } from 'react';
import Header from './components/common/header';
import ProductList from './components/list/productList';
import Product from './components/product/product';
import Cart from './components/cart/cart';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/cart' component={Cart} />
            <Route path='/product/:id' component={Product} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
