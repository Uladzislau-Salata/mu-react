import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./App.css";
import "./Product";
import Product from "./Product";

function App() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }
  // const name1='tyt';
  // const surname1='tyty';
  // const salary1='425';
  // const name2='tam';
  // const surname2='tama';
  // const salary2='325';

  // const users = [
  //   { id: idd(), name: "user1", surn: "surn1", age: 30 },
  //   { id: idd(), name: "user2", surn: "surn2", age: 31 },
  //   { id: idd(), name: "user3", surn: "surn3", age: 32 },
  // ];

  const users = [
    { id: idd(), name: "user1", surn: "surn1", age: 30 },
    { id: idd(), name: "user2", surn: "surn2", age: 31 },
    { id: idd(), name: "user3", surn: "surn3", age: 32 },
  ];
const result=users.map((prop)=>{
  return <Product
  key={prop.id}
  id={prop.id}
  name={prop.name}
  surname={prop.name}
  age={prop.age} />
});

  return (
    <>
      {/* <Product name={name1} surname={surname1} salary={salary1}/>
<Product name={name2} surname={surname2} salary={salary2}/>
В атрибуты тегов компонента можно передавать не только строки, но и выполнять вставку переменных и констант: */}

      {/* <table>
        <tbody>
          <Product
            id={users[0].id}
            name={users[0].name}
            surname={users[0].surn}
            age={users[0].age}
          />
          <Product
            id={users[1].id}
            name={users[1].name}
            surname={users[1].surn}
            age={users[1].age}
          />
          <Product
            id={users[2].id}
            name={users[2].name}
            surname={users[2].surn}
            age={users[2].age}
          />
        </tbody>
      </table> */}
      {/* Сделайте компонент User, выводящий данные юзера на экран. Пусть этими данными будут имя, фамилия, возраст. Оформите данные юзера в виде тега tr, содержащего три тега td. */}

<table>
  <tbody>
    {result}
  </tbody>
</table>
Возьмите компонент User из предыдущего урока. Сделайте так, чтобы в нем появилась кнопка для бана юзера.

    </>
  );
}
export default App;
