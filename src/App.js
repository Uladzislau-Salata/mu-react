import { render } from "@testing-library/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useResolvedPath } from "react-router";
import "./App.css";

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
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
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

function App() {
  const [initProds, setIniProds] = useState([
    { id: idd(), name: "prod1", catg: "catg1", cost: 100 },
    { id: idd(), name: "prod2", catg: "catg2", cost: 200 },
    { id: idd(), name: "prod3", catg: "catg3", cost: 300 },
  ]);
  function idd(s) {
    let a = nanoid(s);
    return a;
  }

  const result = initProds.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button onClick={() => setIddd(elem.id)}>choice</button>
        </td>
      </tr>
    );
  });
  const arr = Object.keys(initProds[0]).slice(1);
  const head = (
    <tr key="heead">
      <td>{arr[0]}</td>
      <td>{arr[1]}</td>
      <td>{arr[2]}</td>
    </tr>
  );
  // const [iddd, setIddd] = useState(null);
  // function getvalue(prop) {
  //   if (iddd) {
  //     return initProds.reduce(
  //       (res, elem) => (elem.id === iddd ? elem[prop] : res),
  //       ""
  //     );
  //   } else {
  //     return obj[prop];
  //   }
  // }
  // const [obj, setObj] = useState(getObj());
  // function getObj() {
  //   return {
  //     id: idd(),
  //     name: "",
  //     catg: "",
  //     cost: "",
  //   };
  // }
  // function changing(prop, ev) {
  //   if (iddd) {
  //     setIniProds( initProds.map((elem) =>
  //       elem.id === iddd ? { ...elem, [prop]: ev.target.value } : elem
  //     ));
  //   } else {
  //     setObj({ ...obj, [prop]: ev.target.value });
  //   }
  // }
  // function saveitems() {
  //   if (iddd) {
  //     setIddd(null);
  //   } else {
  //     setIniProds([...initProds, obj ]);
  //     setObj(getObj);
  //   }
  // }
  return (
    <>
      <table>
        <thead>{head}</thead>
        <tbody>{result}</tbody>
      </table>
      {/* <input value={getvalue("name")} onChange={(ev) => changing("name", ev)} />
      <input value={getvalue("catg")} onChange={(ev) => changing("catg", ev)} />
      <input value={getvalue("cost")} onChange={(ev) => changing("cost", ev)} />
      <button onClick={saveitems}>save</button>
      Возьмите таблицу с продуктами initProds. Сделайте под таблицей универсальную форму для добавления и редактирования продукта. */}

    </>
  );
}
export default App;
