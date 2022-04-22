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

  // const [valuee, setValuee] = useState("text");
  // const [edit, setEdit] = useState(false);
  // let elem;
  // if (!edit) {
  //   elem = <span onClick={()=>setEdit(true)}>{valuee}</span>;
  // } else {
  //   elem = (
  //     <input
  //       value={valuee}
  //       onChange={(ev) => setValuee(ev.target.value)}
  //       onBlur={()=>setEdit(false)}
  //     />
  //   );
  // }

  const [valuee, setValuee] = useState("text");
  const [edit, setEdit] = useState(false);
  // const[elem,setElem]=useState('');
  let elem;
  if (!edit) {
    elem = <p>{valuee}</p>;
  } else {
    elem = (
      <input
        value={valuee}
        onChange={(ev) => change(ev)}
        onBlur={() => setEdit(false)}
      />
    );
  }
  function change(ev) {
    setValuee(ev.target.value);
  }

  return (
    <>
      {/* {elem}
  Давайте сделаем так, чтобы по клику на абзац в нем появлялся инпут, с помощью которого можно будет поредактировать текст абзаца. После потери фокуса инпут должен убираться и в абзаце должен появится отредактированный текст. */}

      {elem}
      <button onClick={() => setEdit(true)}>red inp</button>
      <button onClick={() => setEdit(false)}>show p</button>
      Дан абзац и две кнопки. Пусть по клику на первую кнопку абзац переходит в режим редактирования, а по клику на вторую - в режим показа. Реализуйте описанное.
      
    </>
  );
}
export default App;
