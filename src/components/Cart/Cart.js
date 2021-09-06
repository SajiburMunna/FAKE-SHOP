import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const Cart = props.cart;
  //  const total=Cart.reduce((ttotal,prd)=>ttotal+prd.price,0);
  // const vat=(totalPrice*0.075) ;
  // const fTotal= (totalPrice + vat)  ;

  let total = 0;
  for (let i = 0; i < Cart.length; i++) {
    const cart = Cart[i];
    total = total + cart.price * cart.quantity;
  }

  let shiping = 0;

  total >= 18 ? (shiping = 20) : total >= 10 ? (shiping = 4) : (shiping = 0);

  // let shiping =10;
  // if (total>35){
  //     shiping =20;
  // }else if (total > 15){
  //     shiping =4;

  // }
  const vat = (total / 10).toFixed(2);
  const grandTotal = (total + shiping + Number(vat)).toFixed(2);

  return (
    <div className="cart">
      <h1>Oder Summary</h1>
      <h4>Items Oder: {Cart.length} </h4>
      <small>
        {" "}
        <p> shiping Cost :{Number(shiping.toFixed(2))}</p>
      </small>
      <h4>Vat :{vat}</h4>
      <h4>Total Price: {grandTotal} </h4>

      {props.children}
    </div>
  );
};

export default Cart;
