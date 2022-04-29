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
  // Легко заметить, что код для названия продукта и для цены продукта практически дублируется. Давайте вынесем этот код в отдельный компонент ProductField:
  
}

export default Users;
