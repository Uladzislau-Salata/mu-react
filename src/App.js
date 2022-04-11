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

// function add() {
//   let newobj={
//     id: idd(), name: value1, catg: value2, cost: value3
//   }
// setIniProds([...initProds,newobj]);
// setValue1('');
// setValue2('');
// setValue3('');
// }
// const [value1,setValue1]=useState('');
// const [value2,setValue2]=useState('');
// const [value3,setValue3]=useState('');

// function innitobj() {
//   return{
//     id:idd(),
//     name:'',
//     catg:'',
//     cost:''
//   }
// }
// const[obji,setObji]=useState(innitobj());
// function changing (prop,ev) {
// setObji({...obji,[prop]: ev.target.value})
// }
// function added() {
//   setIniProds([...initProds,obji]);
//   setObji(innitobj());
// }

  return (
    <>
      <table>
        <thead>{head}</thead>
        <tbody>{result}</tbody>
      </table>

{/* <br/>
<input value={value1} onChange={(ev)=>setValue1(ev.target.value)}/>
<input value={value2} onChange={(ev)=>setValue2(ev.target.value)}/>
<input value={value3} onChange={(ev)=>setValue3(ev.target.value)}/>
<button onClick={add}>add elem</button>
Возьмите таблицу с продуктами initProds. Сделайте под таблицей инпуты для добавления нового продукта.
Сделайте так, чтобы текст инпутов очищался после добавления продукто */}

{/* <input value={obji.name} onChange={ev=>changing('name',ev)} />
<input value={obji.catg} onChange={ev=>changing('catg',ev)} />
<input value={obji.cost} onChange={ev=>changing('cost',ev)} />
<button onClick={added}>add elem</button>
Возьмите таблицу с продуктами initProds. Сделайте под таблицей инпуты для добавления нового продукта. */}

    </>
  );
}
export default App;
