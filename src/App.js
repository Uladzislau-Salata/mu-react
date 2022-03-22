import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {

// const [arrs,setArrs]=useState([1,2,3,4]);
// const [valuee,setValuee]=useState('');
// function added() {
//   setArrs([...arrs,valuee]);
// }
// const result=arrs.map((elem,index)=>{
//   return <p key={index} >{elem}</p>;
// });
// console.log(valuee);

// const [arrs,setArrs]=useState([1,2,3,4]);
// let a='1';
// console.log(arrs);
// function deled() {
// // setArrs([...arrs.slice(a,2)])
// const copy=Object.assign([],arrs);
// copy.splice(a,1);
// setArrs(copy);
// }

// const [arrs,setArrs]=useState([1,2,3,4]);
// let a='1';
// console.log(arrs);
// function deled() {
// // setArrs([...arrs.slice(a,2)])
// const copy=Object.assign([],arrs);
// copy[a]='!';
// setArrs(copy);
// }

// const [arrs,setArrs]=useState([4,2,3,1]);
// // let a='1';
// console.log(arrs);
// function deled() {
// // setArrs([...arrs.slice(a,2)])
// const copy=Object.assign([],arrs);
// copy.reverse();
// setArrs(copy);
// }

  return (
    <>

{/* <input type='text' value={valuee} onChange={(ev)=>setValuee(ev.target.value)}/>
<input type='button' value='click me' onClick={added} />
{result}
Сделайте кнопку, по нажатию на которую будет происходить добавление нового элемента в массив. */}

{/* <input type='button' value='click me' onClick={deled} />
Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива. Пусть номер элемента для удаления хранится в переменной. */}

{/* <input type='button' value='click me' onClick={deled} />
Сделайте кнопку, по нажатию на которую будет происходить изменение элемента массива. Пусть номер элемента для изменения хранится в переменной. */}

{/* <input type='button' value='click me' onClick={deled} />
Сделайте кнопку, по нажатию на которую будет происходить переворот элементов массива в обратном порядке. */}

    </>
  );
}
export default App;
