import React from 'react';
import Cart from '../Cart/Cart';

const  ReviewItems = (props) => {
    const{name, quantity,key}=props.product;
    var style={
        borderBottom:'1px solid gray'
        ,marginBottom:'5px'
        ,paddingBottom:'5px'
        ,marginLeft:'5px'
    }
    return (
        <div style={style}>
            <h3>This is Review !</h3>
            <h4>name : {name}</h4>
            <h4>Quantity :{  quantity}</h4>
            <button onClick={()=>{props.removeProduct(key)}}>Remove</button>
        </div>
    );
};

export default  ReviewItems;