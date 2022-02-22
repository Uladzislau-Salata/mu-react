import { nanoid } from "nanoid";
// import React from "react";
import React, { useState } from "react";
import "./App.css";

function App() {
  // let [name, setName] = useState("prod");
  // function clickHandler() {
  //   setName("xxx");
  // }

  // let [name, setName] = useState("prod");
  // let [cost, setCost] = useState("1000");

  // let [inCart, setInCart] = useState(false);
  // console.log(inCart);

  // let [count, setCount] = useState(0);

  let [name, setName] = useState("Name1");
  let [surname, setSurname] = useState("Surname1");
  let [age, setAge] = useState("20");
  let [count, setCount] = useState(true);

  let [vis, setVis] = useState(true);




  return (
    <>
      {/* <span>{name}</span>
      <button onClick={()=>setName('xxx')}>btn1</button> */}

      {/* <span>{name}</span>
      <span>{cost}</span>
      <button onClick={()=>setName('xxx')}>btn1</button>
      <button onClick={()=>setCost('5205')}>btn2</button> */}

      {/* <span>{inCart ? "в корзине" : "не в корзине"}</span>
      <button onClick={()=>setInCart(!inCart)}>btn1</button> */}

      {/* <span>{count}</span>
 <button onClick={()=>setCount(count+1)}>btn1</button> */}

      <span>
        {name} {surname}: {age}
      </span>
      <p>{count ? "забанен" : "не забанен"}</p>
      {/* <button onClick={() => setCount(false)}>ban</button>
      <button onClick={() => setCount(true)}>raz ban</button> */}
      if (condition) {
      <button onClick={() => setCount(false)}>
        ban
      </button>
      } else {
      <button onClick={() => setCount(true)}>
        raz ban
      </button>
      }


      <br />
      <button onClick={() => setName("Ivan")}>btn1</button>
      <button onClick={() => setSurname("Ivanov")}>btn2</button>
      <button onClick={() => setAge("27")}>btn3</button>
    </>
  );
}

export default App;
