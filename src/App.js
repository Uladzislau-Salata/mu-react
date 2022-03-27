import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  
  // const [arrs, setArrs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // const result = arrs.map((elem, index) => {
  //   return (
  //     <p key={index}>
  //       <input
  //         type="number"
  //         key={index}
  //         value={elem}
  //         onChange={(ev) => change(ev, index)}
  //       />
  //     </p>
  //   );
  // });
  // function change(ev, i) {
  //   setArrs([...arrs.slice(0, i), Number(ev.target.value), ...arrs.slice(i + 1)]);
  // }
  // function sr(arr) {
  //   let summ = 0;
  //   for (let a of arr) {
  //     summ += a;
  //   }
  //   return <p>{summ}</p>;
  // }
  // console.log(arrs);

  return (
    <>
      {/* {result}
      {sr(arrs)}
      Выведите на экран среднее арифметическое элементов этого массива. В цикле сделайте инпуты для редактирования элементов. */}
    </>
  );
}
export default App;
