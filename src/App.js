import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
// const[arrs,setArrs]=useState([1,2,3,4]);
// const[valuee,setValuee]=useState();
// const result=arrs.map((elem,index)=>{
// return <p key={index}>{elem}</p>
// })
// function add() {
//   setArrs([...arrs,valuee]);
// }

// const [notes,setNotes] =useState(['a', 'b', 'c','d', 'e']);
// const [valuee,setValuee] =useState();
// const result=notes.map((elem,index)=>{
//   return <li key={index} >{elem}</li>
// })
// function added() {
// setNotes([...notes,valuee]);
// setValuee('');
// }

  return (
    <>

{/* {result}
<input type='text' value={valuee} onChange={(ev)=>setValuee(ev.target.value)} />
<button onClick={add}>Click</button>
Давайте сделаем инпут и кнопку с помощью которых можно будет реактивно добавлять новые абзацы. */}

{/* <input type='text' value={valuee} onChange={(ev)=>setValuee(ev.target.value)} onBlur={added}/>
<ul>
  {result}
</ul>
Выведите элементы этого массива в виде списка ul. Добавьте инпут для добавления новых пунктов списка. Пусть добавление происходит по потери фокуса в инпуте.
Модифицируйте предыдущую задачу так, чтобы при добавлении новой li текст инпута очищался. */}


    </>
  );
}
export default App;
