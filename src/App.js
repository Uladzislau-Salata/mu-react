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
  const initNotes = [
    {
      id: idd(),
      fields: [
        { name: "prop1", value: "value11", isEdit: false },
        { name: "prop2", value: "value12", isEdit: false },
        { name: "prop3", value: "value13", isEdit: false },
      ],
    },
    {
      id: idd(),
      fields: [
        { name: "prop1", value: "value21", isEdit: false },
        { name: "prop2", value: "value22", isEdit: false },
        { name: "prop3", value: "value23", isEdit: false },
      ],
    },
    {
      id: idd(),
      fields: [
        { name: "prop1", value: "value31", isEdit: false },
        { name: "prop2", value: "value32", isEdit: false },
        { name: "prop3", value: "value33", isEdit: false },
      ],
    },
  ];
  const [notes, setNotes] = useState(initNotes);
  const rows = notes.map((note) => {
    const cell = note.fields.map((field) => {
      let elem;
      if (!field.isEdit) {
        elem = <p onClick={() => helper(note.id, field.name)}>{field.value}</p>;
      } else {
        elem = (
          <input
            value={field.value}
            onChange={(ev) => helper(note.id, field.name, ev)}
            onBlur={() => helper(note.id, field.name)}
          ></input>
        );
      }
      return <td key={field.name}>{elem}</td>;
    });
    return <tr key={note.id}>{cell}</tr>;
  });
  // function startEdit(id, name) {
  //   setNotes(
  //     notes.map((note) => {
  //       if (note.id === id) {
  //         const fields = note.fields.map((field) => {
  //           if (field.name === name) {
  //             return { ...field, isEdit: true };
  //           } else {
  //             return field;
  //           }
  //         });
  //         return { id, fields };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }
  // function endEdit(id, name) {
  //   setNotes(
  //     notes.map((note) => {
  //       if (note.id === id) {
  //         const fields = note.fields.map((field) => {
  //           if (field.name === name) {
  //             return { ...field, isEdit: false };
  //           } else {
  //             return field;
  //           }
  //         });
  //         return { id, fields };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }
  // function changeCell(id, name, ev) {
  //   setNotes(notes.map((note) => {
  //       if (note.id === id) {
  //         const fields = note.fields.map((field) => {
  //           if (field.name === name) {
  //             return { ...field, value: ev.target.value };
  //           } else {
  //             return field;
  //           }
  //         });
  //         return { id, fields };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }

  // function helper(id, name, ev) {
  //   setNotes(
  //     notes.map((note) => {
  //       if (note.id === id) {
  //         const fields = note.fields.map((field) => {
  //           if (field.name === name) {
  //             if (ev != undefined) {
  //               return { ...field, value: ev.target.value };
  //             } else {
  //               return { ...field, isEdit: !field.isEdit };
  //             }
  //           } else {
  //             return field;
  //           }
  //         });
  //         return { id, fields };
  //       } else {
  //         return note;
  //       }
  //     })
  //   );
  // }

  return (
    <>
      {/* <table>
        <tbody>{rows}</tbody>
      </table>
      Давайте выведем этот массив в виде HTML таблицы, а затем сделаем так,
      чтобы по клику на ячейку в ней появлялся инпут для редактирования.

       Функции startEdit, endEdit и changeCell имеют практически полностью идентичный
      код. Упростите их код, вынеся общую часть в вспомогательную функцию. */}
    </>
  );
}
export default App;
