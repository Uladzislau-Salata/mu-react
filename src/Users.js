import React, { useState } from "react";
import { nanoid } from "nanoid";
import User from "./User";

function Users() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }

  const initUsers = [
    { id: idd(), name: "user1", surname: "surn1", age: 30 },
    { id: idd(), name: "user2", surname: "surn2", age: 31 },
    { id: idd(), name: "user3", surname: "surn3", age: 32 },
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
        editUser={editUser}
      />
    );
  });
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
  return (
    <div>
      <table>
        <tbody>{result}</tbody>
      </table>
    </div>
    // Давайте выведем эти продукты в виде HTML таблицы. При этом сделаем так, чтобы по нажатию на любую ячейку таблицы в этой ячейке появлялся инпут для редактирования. Для решения задачи сделаем 3 компонента.
    
  );
}

export default Users;
