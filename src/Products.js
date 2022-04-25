import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function Products() {
  const initProds = [
    { id: idd(), name: "product1", cost: 100 },
    { id: idd(), name: "product2", cost: 200 },
    { id: idd(), name: "product3", cost: 300 },
  ];
  function idd(s) {
    let a = nanoid(s);
    return a;
  }
  const [prods, setProds] = useState(initProds);
  const result = prods.map((prod) => {
    return <Product key={prod.id} name={prod.name} cost={prod.cost} />;
  });
  return <div>{result}</div>;
}

export default Products;
