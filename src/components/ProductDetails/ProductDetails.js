import React from 'react';
import {useParams} from "react-router-dom";
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const  ProductDetails = () => {
    const {productkey}=useParams();
    const product=fakeData.find(pd=>pd.key===productkey)
    console.log(product);
    return (
        <div>
            <h1>Your Product Details</h1>
            <Product product={product} showcart={false}></Product>
          
        </div>
    );
};

export default ProductDetails ;