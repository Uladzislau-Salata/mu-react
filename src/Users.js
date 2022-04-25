import React, { useState } from "react";
import { nanoid } from "nanoid";
import User from "./User";

function Users() {
  const initUsers = [
    { id: idd(), name: "user1", surname: "surn1", age: 30 },
    { id: idd(), name: "user2", surname: "surn2", age: 31 },
    { id: idd(), name: "user3", surname: "surn3", age: 32 },
  ];
  function idd(s) {
    let a = nanoid(s);
    return a;
  }
  const [users, setUsers] = useState(initUsers);
  const result = users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
      />
    );
  });
  return <div>{result}</div>;
//   Переберите этот массив циклом и выведите всех юзеров на экран. Создайте для отображения юзера отдельный компонент User.
// Модифицируйте ваш компонент User так, чтобы в нем в абзаце выводился id юзера.

}

export default Users;
