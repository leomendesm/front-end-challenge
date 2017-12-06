import React, { Component } from 'react';
import Header from './components/header';
import ProductList from './components/productList';
import Product from './components/product';
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
            <Route path='/product/:id' component={Product} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
