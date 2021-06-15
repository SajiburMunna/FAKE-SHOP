import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const  Product = (props) => {
   

    //const notify = () => toast("Wow so easy!");
    const {img,name,seller,price,stock,key}=props.product;



    return (
        <div className="container">
        <div className="product" >
       
        <div>  <img src={img} alt=""/> </div>
        <div>
         <h4 className="product-name"> <Link to={"/product/"+key}> {name} </Link>    </h4>
         <br/>
      <p><small>by:{seller}</small></p>
         <p><small>${price}</small></p>
         <p><small>Only {stock} left in stock -oder soon</small></p>
{/*    
   {
       ()=>{
           if (props.showcart )
           {
                <button className="button"   onClick= {()=>{ props.handeladdCart(props.product   ) } }  ><FontAwesomeIcon icon={faShoppingCart }  /> add to cart</button>} 
             
           }
       }
              */}

                {/* <button className="button"   onClick= {()=>{ props.handeladdCart(props.product   ) } }  ><FontAwesomeIcon icon={faShoppingCart }  /> add to cart</button>  */}

        
        {props.showcart  ? <button className="button"   onClick= {()=>{ props.handeladdCart(props.product   ) } }  ><FontAwesomeIcon icon={faShoppingCart }  /> add to cart</button> :  null} 
        
         </div>
            
        </div>
        </div>
    );
};

export default  Product;