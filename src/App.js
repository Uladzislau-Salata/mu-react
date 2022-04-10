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
         <button onClick={()=>dell(elem.id)}>remove</button>
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
  function dell(objid) {
    setIniProds(initProds.filter((el)=> {
      if (el.id!== objid) {
        return el
      }
    }));
  }

  return (
    <>
      {/* <table>
        <thead>{head}</thead>
        <tbody>{result}</tbody>
      </table>
      Возьмите таблицу с продуктами initProds. В конце каждого ряда сделайте ячейку, в которой будет кнопка для удаления продукта. */}

    </>
  );
}
export default App;
