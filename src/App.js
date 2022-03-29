import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";

function App() {
  // const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  // const [num, setNum] = useState(null);
  // const [valuee, setValuee] = useState("");
  // const result = notes.map((elem, index) => {
  //   return (
  //     <p key={index} onClick={() => setNum(index)}>
  //       {elem}
  //     </p>
  //   );
  // });
  // let input;
  // if (num != undefined) {
  //   input = <input value={notes[num]} onChange={addvalue} onBlur={clear} />;
  // } else {
  //   input = <input value={valuee} onChange={changevalue} onBlur={addel} />;
  // }
  // function addvalue(ev) {
  //   setNotes([
  //     ...notes.slice(0, num),
  //     ev.target.value,
  //     ...notes.slice(num + 1),
  //   ]);
  // }
  // function clear() {
  //   setNum(null);
  // }
  // function changevalue(ev) {
  //   setValuee(ev.target.value);
  // }
  // function addel() {
  //   setNotes([...notes, valuee]);
  //   setValuee("");
  // }

  // const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  // const [num, setNum] = useState(null);
  // const [valuee, setValuee] = useState("");
  // const result = notes.map((elem, index) => {
  //   return (
  //     <p key={index} onClick={(ev) => onel(index)}>
  //       {elem}
  //     </p>
  //   );
  // });
  // function onel(ind) {
  //   setNum(ind);
  //   setValuee(notes[ind]);
  // }
  // function changeel(ev) {
  //   setValuee(ev.target.value);
  //   if (num != undefined) {
  //     setNotes([
  //       ...notes.slice(0, num),
  //       ev.target.value,
  //       ...notes.slice(num + 1),
  //     ]);
  //   }
  // }
  // function blurel(ev) {
  //   if (num != undefined) {
  //     setNum(null);
  //   } else {
  //     setNotes([...notes, valuee]);
  //   }
  //   setValuee("");
  // }

  //   const [arrs, setArrs] = useState([1, 2, 3, 4, 5]);
  //   const [ind, setInd] = useState(null);
  //   const result = arrs.map((elem, index) => {
  //     return (
  //       <p key={index} onClick={() => takeindex(index)}>
  //         {elem}
  //       </p>
  //     );
  //   });
  //   function takeindex(i) {
  //     setInd(i);
  //   }
  //   function clearr() {
  //     setInd(null);
  //   }
  //   function added(ev) {
  //     setArrs([...arrs.slice(0, ind), ev.target.value, ...arrs.slice(ind + 1)]);
  //   }
  //   function creat() {
  //     if (!ind) {
  //       const ar = [...arrs, ""];
  //       setArrs(ar);
  //       setInd(arrs.length - 1);
  //     }
  //   }
  // console.log(ind);

//   const [notes, setNotes] = useState(["a", "b", "c", "d", "e"]);
//   const [valuee, setValuee] = useState("");
//   const [ind, setInd] = useState(null);
//   console.log(ind);
//   console.log(notes[ind]);
//   const result = notes.map((elem, index) => {
//     return (
//       <li key={index} onClick={() => start(index)}>
//         {elem}
//       </li>
//     );
//   });
//   function start(i) {
//     setInd(i);
//     setValuee(notes[i]);
//   }
//   function clear() {
//     if (ind!=undefined) {
//       setInd(null)
//     } else {
// setNotes([...notes,valuee])
//     }
// setValuee("");
//   }
//   function added(ev) {
//     setValuee(ev.target.value);
//     if (ind != undefined) {
//       setNotes([
//         ...notes.slice(0, ind),
//         ev.target.value,
//         ...notes.slice(ind + 1),
//       ]);
//     }
//   }

  return (
    <>
      {/* {result}
      {input}
Подход первый
Сделаем два инпута и с помощью условного рендеринга будем показывать или инпут для добавления, или инпут для редактирования. */}

      {/* {result}
      <input value={valuee} onChange={changeel} onBlur={blurel} />
      Подход второй Совместим обе операции в одном инпуте: */}

      {/* {result}
      <input
        value={ind!=undefined ? arrs[ind] : ""}
        onFocus={creat}
        onChange={added}
        onBlur={clearr}
      ></input>
      Сделаем так, чтобы при добавлении нового элемента он сразу появлялся в виде нового абзаца. И при наборе текста в инпуте в этом абзаце сразу набирался текст нового элемента.
Для этого при получении инпутом фокуса в режиме добавления будем сразу же добавлять новый элемент в конец массива и сразу же переходить в режим редактирования для этого элемента. */}

      {/* <ul>{result}</ul>
      <input value={valuee} onChange={added} onBlur={clear}></input>
      Выведите элементы этого массива в виде списка ul. Под списком реализуйте инпут для редактирования существующих и добавления новых пунктов списка. Решите задачу тремя описанными подходами. */}


    </>
  );
}
export default App;
