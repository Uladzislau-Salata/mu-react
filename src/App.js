import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  // const [valuee, setValuee] = useState("");
  // function handleChange(ev) {
  //   setValuee(ev.target.value);
  // }

  // const [valuee, setValuee] = useState("");
  // const texts = ["Гродно", "Мосты", "Минск", "Брест"];
  // const options = texts.map((elem, endex) => {
  //   return <option key={endex}>{elem}</option>;
  // });


// const [valuee,setValuee]=useState('');
// const arr=['0-12','13-17','18-25','25+'];
// const message=arr.map((elem,index)=>{
//   return <option key={index} value={index}>{elem}</option>;
// });

  return (
    <>
      {/* <div>
        <select value={valuee} onChange={handleChange}>
          <option>Мосты</option>
          <option>Гродно</option>
          <option>Минск</option>
          <option>Брест</option>
        </select>
      </div>
      <p>{valuee}</p>
      Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя. */}

      {/* <select value={valuee} onChange={(ev) => setValuee(ev.target.value)}>
        {options}
      </select>
      <p>Ваш выбор: {valuee}</p>
      Пусть в массиве хранится список городов. Выведите с помощью цикла выпадающий список этих городов. */}

{/* <select value={valuee} onChange={ev=>setValuee(ev.target.value)}>
{message}
</select>
<p>
  Ваш выбор: {arr[valuee]}
</p>
С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет. */}


    </>
  );
}
export default App;
