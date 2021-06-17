import React from 'react';
import './App.css';
import Header from './components/Header/Header';
 
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/Login.js';


function App() {
  return (
    <div  >
    
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
     <Route exact path="/">
     <Shop></Shop>
     </Route>
     <Route path="/product/:productkey">
        <ProductDetails></ProductDetails>
     </Route>
     <Route path="/login">
         <Login> </Login>
     </Route>
     <Route path="*">
       <NotFound></NotFound>
     </Route>
    </Switch>
    </Router>
 
    
    </div>
  );
}

export default App;
