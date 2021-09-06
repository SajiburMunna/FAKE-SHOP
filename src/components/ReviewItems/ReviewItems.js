import React from "react";

const ReviewItems = ({ product, removeProduct }) => {
  //   const { name, quantity, key } = props.product;
  var style = {
    borderBottom: "1px solid gray",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "5px",
  };
  return (
    <div style={style}>
      <h3>This is Review !</h3>
      <h4>name : {product.name}</h4>
      <h4>Quantity :{product.quantity}</h4>
      <button
        onClick={() => {
          removeProduct(product.key);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItems;
