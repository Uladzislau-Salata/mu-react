import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";

function App() {
  // let transl = [];
  // transl["А"] = "A";
  // transl["а"] = "a";
  // transl["Б"] = "B";
  // transl["б"] = "b";
  // transl["В"] = "V";
  // transl["в"] = "v";
  // transl["Г"] = "G";
  // transl["г"] = "g";
  // transl["Д"] = "D";
  // transl["д"] = "d";
  // transl["Е"] = "E";
  // transl["е"] = "e";
  // transl["Ё"] = "Yo";
  // transl["ё"] = "yo";
  // transl["Ж"] = "Zh";
  // transl["ж"] = "zh";
  // transl["З"] = "Z";
  // transl["з"] = "z";
  // transl["И"] = "I";
  // transl["и"] = "i";
  // transl["Й"] = "J";
  // transl["й"] = "j";
  // transl["К"] = "K";
  // transl["к"] = "k";
  // transl["Л"] = "L";
  // transl["л"] = "l";
  // transl["М"] = "M";
  // transl["м"] = "m";
  // transl["Н"] = "N";
  // transl["н"] = "n";
  // transl["О"] = "O";
  // transl["о"] = "o";
  // transl["П"] = "P";
  // transl["п"] = "p";
  // transl["Р"] = "R";
  // transl["р"] = "r";
  // transl["С"] = "S";
  // transl["с"] = "s";
  // transl["Т"] = "T";
  // transl["т"] = "t";
  // transl["У"] = "U";
  // transl["у"] = "u";
  // transl["Ф"] = "F";
  // transl["ф"] = "f";
  // transl["Х"] = "X";
  // transl["х"] = "x";
  // transl["Ц"] = "C";
  // transl["ц"] = "c";
  // transl["Ч"] = "Ch";
  // transl["ч"] = "ch";
  // transl["Ш"] = "Sh";
  // transl["ш"] = "sh";
  // transl["Щ"] = "Shh";
  // transl["щ"] = "shh";
  // transl["Ъ"] = '"';
  // transl["ъ"] = '"';
  // transl["Ы"] = "Y'";
  // transl["ы"] = "y'";
  // transl["Ь"] = "'";
  // transl["ь"] = "'";
  // transl["Э"] = "E'";
  // transl["э"] = "e'";
  // transl["Ю"] = "Yu";
  // transl["ю"] = "yu";
  // transl["Я"] = "Ya";
  // transl["я"] = "ya";
  // const [value, setValue] = useState("");
  // const [value1, setValue1] = useState("");
  // function translit(event) {
  //   let a = event.target.value;
  //   setValue1(a);
  //   let per = value;
  //   let elem = a.slice(a.length - 1);
  //   console.log(transl[elem]);
  //   if (transl[elem] != undefined) {
  //     setValue((per += transl[elem]));
  //   } else {
  //     setValue((per += elem));
  //   }
  // }

  // const [value, setValue] = useState("");
  // const [value1, setValue1] = useState("");
  // function sum(event) {
  //   let valuev = event.target.value;
  //   setValue(valuev);
  //   let arr = valuev.split("\n");
  //   let su = 0;
  //   for (let a of arr) {
  //     su += Number(a);
  //   }
  //   setValue1(su);
  // }

  return (
    <>
      {/* <textarea value={value1} onChange={translit} />
      <p>{value}</p>
      Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился транслит вводимого текста. */}

      {/* <textarea value={value} onChange={sum} />
      <p>{value1}</p>
      Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел. */}


    </>
  );
}
export default App;
