import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Product from "./components/Product/Product";
import Checkout from "./components/Checkout/Checkout";
import Activities from "./components/Activities/Activities";
import { CartProvider } from "./contexts/Cart";

import "./index.css";

ReactDOM.render(
  <main>
    <CartProvider>
      <Router>
        <Header />
        <Route
          path="/"
          exact
          component={({ history }) => <ProductList history={history} />}
        />
        <Route
          path="/product/:id"
          component={({ match, history }) => (
            <Product id={match.params.id} history={history} />
          )}
        />
        <Route path="/checkout" component={() => <Checkout />} />
        <Route path="/activities" component={() => <Activities />} />
      </Router>
    </CartProvider>
  </main>,
  document.getElementById("root")
);
