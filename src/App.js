import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
// import React from "react";
import React, { useState } from "react";
import "./App.css";

function App() {
  // let [name, setName] = useState("Name1");
  // let [surname, setSurname] = useState("Surname1");
  // let [age, setAge] = useState("20");
  // let [count, setCount] = useState(true);
  // let [num, setNum] = useState(0);

  // let [vis, setVis] = useState(true);

  // function bann() {
  //   if (vis) {
  //     setCount(false);
  //     setVis(!vis);
  //   } else {
  //     setCount(true);
  //     setVis(!vis);
  //   }
  // }

  return (
    <>
      {/* <span>
        {name} {surname}: {age}
      </span>
      <p>{count ? "забанен" : "не забанен"}</p> <span>{num}</span> */}
      {/* <button onClick={(() => setCount(false))}>ban</button>
      <button onClick={(() => setCount(true))}>raz ban</button> */}
      {/* <button onClick={(() => setCount(false))}>ban</button>
      <button onClick={(() => setCount(true))}>raz ban</button> */}
      {/* <button onClick={(() => setNum(num+1))}>+</button>
      <button onClick={(() => setNum(num-1))}>-</button>
      Сделайте еще две кнопки. Пусть первая кнопка увеличивает возраст на единицу, а вторая - уменьшает его. */}
{/*
      <br />
      <button onClick={() => setName("Ivan")}>btn1</button>
      <button onClick={() => setSurname("Ivanov")}>btn2</button>
      <button onClick={() => setAge("27")}>btn3</button> */}
    </>
  );
}
export default App;
