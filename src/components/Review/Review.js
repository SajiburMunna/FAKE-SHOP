import React from 'react';
import {useState,useEffect} from 'react'
import fakeData from '../../fakeData/index.js';
import { getDatabaseCart, processOrder, removeFromDatabaseCart  } from '../../utilities/databaseManager.js'
import Cart from '../Cart/Cart.js';
 import  ReviewItems from '../ReviewItems/ReviewItems.js'
 import './Review.css'

const  Review = () => {
    const [cart, setCart] = useState([]);
    const handleOderPlace = ()=>{
        setCart([]);
       processOrder();

    }
    const removeProduct =(productsKey)=>{
        console.log('remove products',productsKey);
        const newCart=cart.filter(pd=>pd.key !== productsKey);
        setCart(newCart);
        removeFromDatabaseCart(productsKey);

    }
    useEffect(() => {
        const saveCart=getDatabaseCart ();
        const productsKey=Object.keys(saveCart);
        const cartProducts= productsKey.map(key=>{
           
            const product=fakeData.find(pd =>pd.key ===key);
            product.quantity=saveCart[key];
            return product;
        });
        setCart(cartProducts);

         
    },[])
    return (
        <div className=" twin-container">
            <div className=" twins-container">
         
            {cart.map(pd=> <ReviewItems product={pd} key={pd.key}  removeProduct={removeProduct}></ReviewItems>)}
          

            </div>
          <div>
              <Cart cart={cart}>
                  <button onClick={handleOderPlace}>placeOder</button>
              </Cart>
          </div>
      
        </div>
    );
};

export default Review ;