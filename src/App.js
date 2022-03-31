import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";


const initDate = {
	year:  2025,
	month: 12,
	day:   31,
}


function App() {

// const[obj,setObj]=useState(initDate);
// const now=new Date();
// const date= new Date(obj.year, Number(obj.month)-1,obj.day);
// console.log(date.getDay());

// const[obj,setObj]=useState(initDate);
// const now=new Date();
// const date= new Date(obj.year, Number(obj.month)-1,obj.day);
// console.log(date.getDay());
// function redac(par,ev) {
//   setObj({...obj,...{[par]: ev.target.value}})
// }

  return <>

{/* <p>{obj.day}.{obj.month}.{obj.year}</p>
Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей. */}

{/* <p>{obj.day}.{obj.month}.{obj.year}</p>
<input type='number' value={obj.day} onChange={ev=>redac('day',ev)}></input>
<input type='number' value={obj.month} onChange={ev=>redac('month',ev)}></input>
<input type='number' value={obj.year} onChange={ev=>redac('year',ev)}></input>
Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты. */}



  </>;
}
export default App;
