import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";

function App() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }

  const[visible1,setVisible1]=useState(false);
  let elem1;
  if (visible1) {
    elem1=<p>text</p>;
  }

  const[visible2,setVisible2]=useState(false);
  let elem2;
  if (visible2) {
    elem2=<p>text</p>;
  }

  const[visible3,setVisible3]=useState(false);
  let elem3;
  if (visible3) {
    elem3=<p>text</p>;
  }
  return (
    <>
    <button onClick={()=>setVisible1(!visible1)}>{visible1?'hide1':'show1'}</button>
{elem1}
    <button onClick={()=>setVisible2(!visible2)}>{visible2?'hide2':'show2'}</button>
{elem2}
    <button onClick={()=>setVisible3(!visible3)}>{visible3?'hide3':'show3'}</button>
{elem3}
Пусть у вас есть три абзаца. Сделайте три кнопки, каждая из которых будет отвечать за показ определенного абзаца

    </>
  );
}
export default App;
