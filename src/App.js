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

  const initProds = [
    {
      id: idd(),
      name: "prod1",
      cost: "cost1",
      desc: "long description 1",
      comm: "my super comment 1",
      showd: false,
      showc: false,
    },
    {
      id: idd(),
      name: "prod2",
      cost: "cost2",
      desc: "long description 2",
      comm: "my super comment 2",
      showd: false,
      showc: false,
    },
    {
      id: idd(),
      name: "prod3",
      cost: "cost3",
      desc: "long description 3",
      comm: "my super comment 3",
      showd: false,
      showc: false,
    },
  ];
  const [notes, setNotes] = useState(initProds);
  const result = notes.map((note) => {
    let descc;
    let commm;
    if (note.showd) {
      descc = <li>{note.desc}</li>;
    }
    if (note.showc) {
      commm = <li>{note.comm}</li>;
    }
    return (
      <ul key={note.id}>
        <li>{note.name}</li>
        <li>{note.cost}</li>
        {descc}
        {commm}
        <button onClick={() => showDesc(note.id)}>
          {note.showd ? "hide desc" : "show desc"}
        </button>
        <button onClick={() => showComm(note.id)}>
          {note.showc ? "hide comm" : "show comm"}
        </button>
      </ul>
    );
  });
  function showDesc(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, showd: !note.showd };
        } else {
          return note;
        }
      })
    );
  }
  function showComm(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, showc: !note.showc };
        } else {
          return note;
        }
      })
    );
  }

  return (
    <>
      {result}
      Выведите этот массив в виде списка ul. Сделайте так, чтобы описание и
      отзыв изначально были не показаны, а для их показа было две кнопки в конце
      каждой li.
    </>
  );
}
export default App;
