import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  // const [value1,setValue1]=useState('text1');
  // const [value2,setValue2]=useState('text2');

  // const [value1,setValue1]=useState('text1');
  // const [value2,setValue2]=useState('text2');

  // const [value1, setValue1] = useState("");
  // const [value2, setValue2] = useState("2022");
  // function ege(ev) {
  //   let date = new Date();
  //   let a=date.getFullYear();
  //   setValue1(ev.target.value);
  //   setValue2(a-Number(ev.target.value));
  // }

  // const [value1, setValue1] = useState("0");
  // const [value2, setValue2] = useState("32");
  // function temp(ev) {
  //   setValue1(ev.target.value);
  //   setValue2((Number(ev.target.value) * 9) / 5 + 32);
  // }

  // const [value1, setValue1] = useState(0);
  // const [value2, setValue2] = useState(0);
  // const [value3, setValue3] = useState(0);
  // const [value4, setValue4] = useState(0);
  // const [value5, setValue5] = useState(0);
  // function temp1(ev) {
  //   setValue1(ev.target.value);
  // };
  // function temp2(ev) {
  //   setValue2(ev.target.value);
  // };
  // function temp3(ev) {
  //   setValue3(ev.target.value);
  // };
  // function temp4(ev) {
  //   setValue4(ev.target.value);
  // };
  // function temp5(ev) {
  //   setValue5(ev.target.value);
  // };

  return (
    <>
      {/* <input value={value1} onChange={(ev)=>setValue1(ev.target.value)} />
      <p>{value1}</p>
      <input value={value2} onChange={(ev)=>setValue2(ev.target.value)} />
      <p>{value2}</p>
      Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац */}

      {/* <input value={value1} onChange={(ev) => setValue1(ev.target.value)} />
      <p>{value1.length}</p>
      <input value={value2} onChange={(ev) => setValue2(ev.target.value)} />
      <p>{value2.length}</p>
      Дан инпут. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в абзаце выводилось количество введенных в инпут символов. */}

      {/* <input value={value1} onChange={ege} />
      <p>{value2}</p>
      Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста, в абзаце автоматически появлялся год рождения пользователя. */}

      {/* <input value={value1} onChange={temp} />
      <p>{value2}</p>
      Дан инпут и абзац. В инпут вводятся градусы Фаренгейта. Сделайте так, чтобы при наборе текста, в абзаце автоматически выполнялась конвертация в градусы Цельсия. */}

      {/* <input value={value1} onChange={temp1} /><br/>
      <input value={value2} onChange={temp2} /><br/>
      <input value={value3} onChange={temp3} /><br/>
      <input value={value4} onChange={temp4} /><br/>
      <input value={value5} onChange={temp5} />
      <p>{(Number(value1) + Number(value2) + Number(value3) + Number(value4) + Number(value5)) / 5}</p>
      Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел. */}


    </>
  );
}
export default App;
