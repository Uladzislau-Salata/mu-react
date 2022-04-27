import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function Products() {
  const initProds = [
    { id: idd(), name: "product1", cost: 100, inCart: false },
    { id: idd(), name: "product2", cost: 200, inCart: false },
    { id: idd(), name: "product3", cost: 300, inCart: false },
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
        cart={prod.inCart}
        addToCart={addToCart}
      />
    );
  });
  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = true;
        }
        return prod;
      })
    );
  }
  return
  <div>{result}</div>
  // Пусть теперь мы хотим изменять наши продукты. Сделаем, к примеру, кнопку, которая будет помещать наш продукт в корзин
  
  ;

}

export default Products;
