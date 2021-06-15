 import React, { useEffect } from 'react';
 import {Link} from 'react-router-dom'
 
 import fakeData from '../../fakeData';
 import {useState} from 'react';
 import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager.js'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
 const Shop = () => {
   
     const first10=fakeData.slice(0,10);
     const [products, setProducts] = useState( first10);
     const  [cart,setCart] = useState([]);

     useEffect(()=>{
         const saveCart=getDatabaseCart();
         const productKeys=Object.keys(saveCart);
         const previousCart=productKeys.map(existingKey=>{
             const product=fakeData.find (pd => pd.key === existingKey);
             product.quantity =saveCart[existingKey];
             return product;
         })
         setCart(previousCart);

     },[])
     const handelAddCart=(product)=>{
         const toBeAddedKey=product.key;
        const sameProduct=cart.find(pd => pd.key === product.key);
        let count =1;
        let newCart;
        if (sameProduct){
            const count =sameProduct.quantity+ 1;
            sameProduct.quantity=count;
            const others=cart.filter(pd=> pd.key !== toBeAddedKey);
            newCart=[...others,sameProduct];
        }
        else {
            product.quantity=1;
            newCart=[...cart,product];
        }
         
         setCart(newCart);
      
         addToDatabaseCart(product.key , count);
         

     }
   
     
     return (
         <div className="shop-container">

         <div className="products-container">

             {
               products.map (prd=><Product showcart={true} key={prd.key}
               handeladdCart={handelAddCart} 
                product={prd}> 
                </Product>)

             }
          

         </div>

         <div className="cart-container">
             <Cart cart={cart} > 
             <Link to="/oder"> <button className="button">Process</button></Link></Cart>
            
         </div>
             
            
         </div>

         

      
     );
 };
 
 export default  Shop;