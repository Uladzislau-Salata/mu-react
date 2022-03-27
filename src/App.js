import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {

  // const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
  // const [num, setNum] = useState(null);
  // const result = notes.map((elem,index) => {
  //   return  <li key={index} >
  //       {elem}
  //       <button onClick={()=>setNum(index)}>click me</button>
  //     </li>
  // });
  // function red(ev) {
  //   setNotes([
  //     ...notes.slice(0, num),
  //     ev.target.value,
  //     ...notes.slice(num + 1)]);
  // }


  return (
    <>
{/* <ul>
      {result}
</ul>
      <input value={num!= undefined? notes[num] : ""} onChange={red} onBlur={(ev)=>ev.target.value=''} />
      Выведите элементы этого массива в виде списка ul. Под списком реализуйте инпут для редактирования пунктов списка. Пусть в конце каждой li стоит кнопка, по нажатию на которую будет начинаться редактирование этой li.
      Модифицируйте предыдущую задачу так, чтобы при потере фокуса в инпуте его текст очищался. */}



    </>
  );
}
export default App;
