import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login.js";
import Shipment from "./components/Shipment/Shipment.js";
import { AuthContextProvider, PrivateRoute } from "./components/Login/useAuth";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/oder">
              <Review></Review>
            </Route>
            <Route path="/manager">
              <Inventory></Inventory>
            </Route>

            <Route path="/product/:productkeY">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/login">
              <Login> </Login>
            </Route>
            <PrivateRoute PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
