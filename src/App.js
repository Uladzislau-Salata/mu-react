import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";

function App() {
  const initNotes = [
    {
      id: "JAmjRlfQT8rLTm5tG2m1L",
      prop1: "value11",
      prop2: "value12",
      prop3: "value13",
    },
    {
      id: "IWSpfBPSV3SXgRF87uO74",
      prop1: "value21",
      prop2: "value22",
      prop3: "value23",
    },
    {
      id: "GMNCZnFT4rbBP6cirA0Ha",
      prop1: "value31",
      prop2: "value32",
      prop3: "value33",
    },
  ];

  // const [objs, setObjs] = useState(initNotes);
  // const idd = "IWSpfBPSV3SXgRF87uO74";
  // function dell() {
  //   setObjs(
  //     objs.filter((obj) => {
  //       if (obj.id !== idd) {
  //         return obj;
  //       }
  //     })
  //   );
  // }
  // function dell() {
  //   setObjs(objs.filter(obj=>obj.id !==idd));
  // }
  // console.log(objs);

  // const [objj, setObj] = useState(initNotes);
  // function idd(s) {
  //   let a = nanoid(s);
  //   return a;
  // }
  // const newel = {
  //   id: idd(),
  //   prop1: "value 31",
  //   prop2: "valued32",
  //   prop3: "valuedd33",
  // };
  // const result = objj.map((se) => {
  //   return (
  //     <p key={se.id}>
  //       <span>{se.prop1}</span>
  //       <span>{se.prop2}</span>
  //       <span>{se.prop3}</span>
  //     </p>
  //   );
  // });
  // console.log(objj);
  // console.log(newel);
  // function add() {
  //   setObj([...objj, newel]);
  // }

  // function idd(s) {
  //   let a = nanoid(s);
  //   return a;
  // }
  // const [objs, setObjs] = useState(initNotes);
  // const result = objs.map((obj) => {
  //   return (
  //     <p key={obj.id}>
  //       <span>{obj.prop1}</span>
  //       <span>{obj.prop2}</span>
  //       <span>{obj.prop3}</span>
  //     </p>
  //   );
  // });
  // const data = {
  //   id: "IWSpfBPSV3SXgRF87uO74",
  //   prop1: "value21 !",
  //   prop2: "value22 !",
  //   prop3: "value23 !",
  // };
  // console.log(objs);
  // function red() {
  //   setObjs(
  //     objs.map((s) => {
  //       if (s.id === data.id) {
  //         return data;
  //       } else {
  //         return s;
  //       }
  //     })
  //   );
  // }(или тернарный оператор )

  // const id = "JAmjRlfQT8rLTm5tG2m1L";
  // const prop1 = "prop2";
  // const prop2 = "prop3";
  // const value1 = "!";
  // const [obj, setObjs] = useState(initNotes);
  // const result = obj.map((note) => {
  //   return (
  //     <p key={note.id}>
  //       <span>{note.prop1}</span>
  //       <span>{note.prop2}</span>
  //       <span>{note.prop3}</span>
  //     </p>
  //   );
  // });
  // function red() {
  //   setObjs(
  //     obj.map((s) => {
  //       if (s.id === id) {
  //         console.log('!');
  //         return {...s, [prop]: s[prop]+value1};
  //       } else {
  //         console.log('0');
  //         return s;
  //       }
  //     })
  //   );
  // }
  // function red() {
  //   setObjs(
  //     obj.map((s) => {
  //       if (s.id === id) {
  //         return {
  //           ...s,
  //           [prop1]: s[prop1] + value1,
  //           [prop2]: s[prop2] + value1,
  //         };
  //       } else {
  //         console.log("0");
  //         return s;
  //       }
  //     })
  //   );
  // }
  // function red() {
  //   const copy = Object.assign([], obj);
  //   copy.map((r) => {
  //     if (r.id === id) {
  //       r[prop1] = r[prop1] + value1;
  //       r[prop2] = r[prop2] + value1;
  //     }
  //   });
  //   setObjs(copy)
  // }

  // const id = "JAmjRlfQT8rLTm5tG2m1L";
  // const prop = "prop2";
  // const [obj, setObjs] = useState(initNotes);
  // const result = obj.map((note) => {
  //   return (
  //     <p key={note.id}>
  //       <span>{note.prop1}</span>
  //       <span>{note.prop2}</span>
  //       <span>{note.prop3}</span>
  //     </p>
  //   );
  // });
  // const [znach, setZnach] = useState("");
  // function idd() {
  //   obj.reduce((a, b) => {
  //     if (b.id === id) {
  //       setZnach(b[prop]);
  //     }
  //   }, "");
  // }

  // const [initProds, setIniProds] = useState([
  //   { id: idd(), name: "prod1", catg: "catg1", cost: 100 },
  //   { id: idd(), name: "prod2", catg: "catg2", cost: 200 },
  //   { id: idd(), name: "prod3", catg: "catg3", cost: 300 },
  // ]);
  // function idd(s) {
  //   let a = nanoid(s);
  //   return a;
  // }
  // const result = initProds.map((elem) => {
  //   return (
  //     <tr key={elem.id}>
  //       <td>{elem.name}</td>
  //       <td>{elem.catg}</td>
  //       <td>{elem.cost}</td>
  //     </tr>
  //   );
  // });
  // const arr = Object.keys(initProds[0]).slice(1);
  // const head = (
  //   <tr key="heead">
  //     <td>{arr[0]}</td>
  //     <td>{arr[1]}</td>
  //     <td>{arr[2]}</td>
  //   </tr>
  // );

  return (
    <>
      {/* <button onClick={dell}>del</button>
      Пусть в переменной хранится id элемента. Сделайте кнопку, которая будет удалять элемент с заданным id. */}

      {/* {result}
      <button onClick={add}>click me</button>
      Под абзацами сделайте кнопку, по нажатию на которую в наш массив будет добавляться новый элемент. Пусть при каждом нажатии на кнопку для добавляемого элемента генерируется новый id. */}

      {/* {result}
      <button onClick={red}>click me</button>
      Сделайте кнопку, по нажатию на которую будет изменен элемент массива с id, равным 'JAmjRlfQT8rLTm5tG2m1L'. */}

      {/* {result}
      <button onClick={red}>click me</button>
      Сделайте кнопку, по нажатию на которую будет браться элемент массива с указанным id, в нем будет браться свойство с указанным именем и в конец значения этого свойства будет дописываться знак '!'
      Модифицируйте предыдущую задачу так, чтобы по клику изменения выполнялись сразу для двух указанных свойств.
      Переделайте приведенное в теории решение через копирование объекта с помощью Object.assign. */}

      {/* {result}
      <button onClick={idd}>click me</button>
      <p>{znach}</p>
      Сделайте кнопку, по нажатию на которую в какой-нибудь абзац из объекта с указанным id выведется значение свойства с указанным именем. */}

      {/* <table>
        <thead>{head}</thead>
        <tbody>{result}</tbody>
      </table>
      Возьмите массив с продуктами initProds и выведите его в виде HTML таблицы. На основе этой таблицы решайте задачи следующих уроков. */}

    </>
  );
}
export default App;
