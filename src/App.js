import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  // const [value1, setValue1] = useState(0);
  // const [value2, setValue2] = useState(0);
  // const [result, setResult] = useState(0);

  // console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
  //     + ' ' + addzero(date.getDate()) + '.' + addzero(date.getMonth() + 1) + '.' + date.getFullYear());

  // let date= new Date();
  // let nowdate=date.getFullYear()+'-'+Number(date.getMonth()+1)+'-'+date.getDate();
  //   const [value1, setValue1] = useState(nowdate);
  //   const [value2, setValue2] = useState(nowdate);
  //   const [result, setResult] = useState(0);
  //   function red() {
  //     let arr1 = value1.split("-");
  //     let date1 = new Date(arr1[0], Number(arr1[1]) - 1, arr1[2]);
  //     let arr2 = value2.split("-");
  //     let date2 = new Date(arr2[0], Number(arr2[1]) - 1, arr2[2]);
  //     let a =Math.round(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  //     return a;
  //   }

  // const [value1, setValue1] = useState("");
  // const [result, setResult] = useState(0);
  // function fact(s) {
  //   let a = 1;
  //   for (let i = 1; i <= s; i++) {
  //     a *= i;
  //   }
  //   console.log(a);
  //   return a;
  // }

  // const [value1, setValue1] = useState("");
  // const [result, setResult] = useState(0);
  // function del(num) {
  //   let a = [];
  //   for (let i = 1; i <= num; i++) {
  //     if (num % i == 0) {
  //       a.push(i);
  //     }
  //   }
  //   console.log(a);
  //   let b = 1;
  //   for (let u of a) {
  //     b *= u;
  //   }
  //   return b;
  // }

  return(
    <>
      {/* <input value={value1} onChange={event=>setValue1(event.target.value)} />
      <input value={value2} onChange={event=>setValue2(event.target.value)} />
      <button onClick={()=>setResult(Number(value1)+Number(value2))}>btn</button>
      <button onClick={()=>setResult(Number(value1)*Number(value2))}>btn</button>
      <p>result: {result}</p>
      Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. Результат выводите в абзац. */}

      {/* <input
        value={value1}
        onFocus={() => setValue1("")}
        onChange={(event) => setValue1(event.target.value)}
      />
      <input
        value={value2}
        onFocus={() => setValue2("")}
        onChange={(event) => setValue2(event.target.value)}
      />
      <button onClick={() => setResult(red())}>btn</button>
      <p>result: {result}</p> */}
      {/* Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.*/}
      {/* Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата. */}

      {/* <input
        value={value1}
        onChange={(event) => setValue1(event.target.value)}
        onBlur={() => setResult(fact(value1))}
      />
      <p>result: {result}</p>
      Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа. */}

      {/* <input
        value={value1}
        onChange={(event) => setValue1(event.target.value)}
        onBlur={() => setResult(del(Number(value1)))}
      />
      <p>result: {result}</p>
      Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац произведение делителей введенного числа. */}



    </>
  );
}
export default App;
