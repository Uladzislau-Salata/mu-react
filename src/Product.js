import React from "react";

function Product({id, name, cost, cart,addToCart }) {
  return (
    <div>
      name:<span> {name}</span>;
      cost:<span> {cost}</span>;
      <span>{cart? 'in cart':'not in cart'}</span>
      <button onClick={()=>addToCart(id)}>add</button>
    </div>
  );
}
export default Product;
