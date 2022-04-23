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

  return (
    <>
<Product name="name1" surname="surname1" salary="100"/>
<Product name="name2" surname="surname2" salary="200"/>
<Product name="name3" surname="surname3" salary="300"/>
Сделайте компонент Employee, выводящий данные работника на экран. Пусть этими данными будут фамилия, имя, отчество и зарплата. Оформите эти данные в нужную вам верстку. Выведите в компоненте App трех работников с разными данными.

    </>
  );
}
export default App;
