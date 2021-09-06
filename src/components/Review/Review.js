import React from "react";
import { useState, useEffect } from "react";
import fakeData from "../../fakeData/index.js";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager.js";
import Cart from "../Cart/Cart.js";
import ReviewItems from "../ReviewItems/ReviewItems.js";
import "./Review.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/useAuth.js";

const Review = () => {
  const [cart, setCart] = useState([]);

  const auth = useAuth();
  // const handleOderPlace = ()=>{
  //     setCart([]);
  //    processOrder();

  // }
  const removeProduct = (productsKey) => {
    console.log("remove products", productsKey);
    const newCart = cart.filter((pd) => pd.key !== productsKey);
    setCart(newCart);
    removeFromDatabaseCart(productsKey);
  };
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productsKey = Object.keys(saveCart);
    const cartProducts = productsKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className=" twin-container">
      <div className=" twins-container">
        {cart.map((pd) => (
          <ReviewItems
            product={pd}
            key={pd.key}
            removeProduct={removeProduct}
          ></ReviewItems>
        ))}
        {!cart.length && <a href="/shop"> Your Cart is Empty.Keep Shopping </a>}
      </div>
      <div>
        <Cart cart={cart}>
          <Link to="shipment">
            {auth.user ? (
              <button>Proceed Checkout</button>
            ) : (
              <button>Proceed Signin</button>
            )}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
