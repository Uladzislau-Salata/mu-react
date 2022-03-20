import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  // const[checked,setChecked]=useState(false);
  // const[hello,setHello]=useState('');
  // function hel() {
  //   if (checked) {
  //     setHello('Privet');
  //   } else {
  //     setHello('Poka');
  //   }
  // }

  // const[checked1,setChecked1]=useState(true);
  // const[checked2,setChecked2]=useState(true);
  // const[checked3,setChecked3]=useState(true);
  // const[text1,setText1]=useState('');
  // const[text2,setText2]=useState('');
  // const[text3,setText3]=useState('');
  // function changeText1() {
  //   setChecked1(!checked1);
  //   setText1(String(checked1));
  // }
  // function changeText2() {
  //   setChecked2(!checked2);
  //   setText2(String(checked2));
  // }
  // function changeText3() {
  //   setChecked3(!checked3);
  //   setText3(String(checked3));
  // }

  // const[checked1,setChecked1]=useState(true);
  // let massage;
  // if (checked1) {
  // massage=<div>
  // 	<h2>Ура, вам уже есть 18</h2>
  // 	<p>
  // 		здесь расположен контент только для
  // 			взрослых
  // 	</p>
  // </div>;
  // } else {
  //   massage=<div>
  // 	<p>
  // 		увы, вам еще нет 18 лет:(
  // 	</p>
  // </div>;
  // }

  // const [checked1, setChecked1] = useState(true);
  // let massage;
  // if (checked1) {
  //   massage=<p>1234</p>;
  // } else {
  //   massage=<p hidden >1234</p>;
  // }



  return (
    <>
      {/* <input type='checkbox' onChange={()=>setChecked(!checked)} ></input>
<button onClick={hel}>click</button>
<p>{hello}</p>
Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания. */}

      {/* <p>Отметьте языки которые вы знаете</p>
<p>HTML<input type='checkbox' onChange={changeText1} ></input></p>
<p>CSS<input type='checkbox' onChange={changeText2} ></input></p>
<p>JS<input type='checkbox' onChange={changeText3} ></input></p>
<p>HTML {text1}</p>
<p>CSS {text2}</p>
<p>JS {text3}</p>
С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы. */}

      {/* <input type='checkbox' checked={checked1} onChange={()=>setChecked1(!checked1)} />
<div>{massage}</div>
Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода: */}

      {/* <input
        type="checkbox"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />
      <div>{massage}</div>
      Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его. */}



    </>
  );
}
export default App;
