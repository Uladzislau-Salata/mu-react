import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function Products() {
  const initProds = [
    { id: idd(), name: "prod1", cost: "cost1", catg: "catg1" },
    { id: idd(), name: "prod2", cost: "cost2", catg: "catg2" },
    { id: idd(), name: "prod3", cost: "cost3", catg: "catg3" },
  ];
  function idd(s) {
    let a = nanoid(s);
    return a;
  }
  const [prods, setProds] = useState(initProds);
  const result = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        catg={prod.catg}
        changeField={changeField}
      />
    );
  });
  function changeField(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id == id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }
  return (
    <div>
      <table>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
}

export default Products;
