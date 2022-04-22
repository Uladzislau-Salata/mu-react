import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";

function App() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }
  // const initNotes = [
  //   { text: "note1", isEdit: false },
  //   { text: "note2", isEdit: false },
  //   { text: "note3", isEdit: false },
  // ];
  // const [notes, setNotes] = useState(initNotes);
  // function startEdit(index) {
  //   const copy = Object.assign([], notes);
  //   copy[index].isEdit = true;
  //   setNotes(copy);
  // }
  // function endEdit (index) {
  //   const copy=Object.assign([],notes);
  //   copy[index].isEdit=false;
  //   setNotes(copy);
  // }
  // function chang(index, ev) {
  //   const copy = Object.assign([], notes);
  //   copy[index].text = ev.target.value;
  //   setNotes(copy);
  // }
  // const result = notes.map((note, index) => {
  //   let elem;
  //   if (!note.isEdit) {
  //     elem = (
  //       <span onClick={() => startEdit(index)}>
  //         {note.text}
  //       </span>
  //     );
  //   } else {
  //     elem = (
  //       <input
  //       value={note.text}
  //       onChange={(ev) => chang(index, ev)}
  //       onBlur={()=>endEdit(index)}/>
  //     );
  //   }
  //   return <li key={index}>{elem}</li>;
  // });

  // const initNotes = [
  //   { text: "note1", isEdit: false },
  //   { text: "note2", isEdit: false },
  //   { text: "note3", isEdit: false },
  // ];
  // const [notes, setNotes] = useState(initNotes);
  // const result = notes.map((note, index) => {
  //   let elem;
  //   if (!note.isEdit) {
  //     elem = <p>{note.text}</p>;
  //   } else {
  //     elem = <input value={note.text} onChange={(ev) => change(ev, index)} onBlur={()=>evntstartstop(index)} />;
  //   }
  //   return (
  //     <li key={index}>
  //       {elem}
  //       <button onClick={() => evntstartstop(index)}>change/accept</button>
  //     </li>
  //   );
  // });
  // function evntstartstop(index) {
  //   const copy = Object.assign([], notes);
  //   copy[index].isEdit = !copy[index].isEdit;
  //   setNotes(copy);
  // }
  // function change(ev, index) {
  //   const copy = Object.assign([], notes);
  //   copy[index].text = ev.target.value;
  //   setNotes(copy);
  // }

  return (
    <>
      {/* <ul>{result}</ul>
      Давайте выведем этот массив в виде списка ul. Затем сделаем так, чтобы по клику на любую лишку в ней появлялся инпут для редактирования ее текста. */}

      {/* <ul>{result}</ul>
      Дан массив. Выведите его в виде списка ul. В конце каждой li сделайте кнопку для редактирования. Пусть по первому нажатию на эту кнопку в тексте li появляется инпут для редактирования, а по второму нажатию - появляется измененный текст. */}

    </>
  );
}
export default App;
