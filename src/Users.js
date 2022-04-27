import React, { useState } from "react";
import { nanoid } from "nanoid";
import User from "./User";

function Users() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }

  const initUsers = [
    { id: idd(), name: "user1", surname: "surn1", age: 30, isEdit: false },
    { id: idd(), name: "user2", surname: "surn2", age: 31, isEdit: false },
    { id: idd(), name: "user3", surname: "surn3", age: 32, isEdit: false },
  ];
  const [users, setUsers] = useState(initUsers);
  const result = users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
        isEdit={user.isEdit}
        toggleMode={toggleMode}
        editUser={editUser}
      />
    );
  });
  function toggleMode(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isEdit = !user.isEdit;
        }
        return user;
      })
    );
  }
  function editUser(id, field, ev) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user[field] = ev.target.value;
        }
        return user;
      })
    );
  }
  return <div>{result}</div>;
  // Давайте теперь будем редактировать наши продукты с помощью инпутов. Для этого в дочернем компоненте сделаем кнопку.
// По первому нажатию на эту кнопку пусть вместо названия и цены с продуктом появятся инпуты для их редактирования, а по второму нажатию вместо инпутов опять появятся тексты.
  // Проделайте аналогичные операции с компонентами Users и User, созданными вами в предыдущих уроках
}

export default Users;
