import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header'
import AllProducts from './Components/AllProducts'
import Footer from './Components/Footer'
import Product from './Components/Product';
import Cart from './Components/Cart';
import Login from './Components/Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
          <Route path="/allProducts">
            <AllProducts />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
