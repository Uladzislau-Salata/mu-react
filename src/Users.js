import React, { useState } from "react";
import { nanoid } from "nanoid";
import User from "./User";

function Users() {
  function idd(s) {
    let a = nanoid(s);
    return a;
  }

  const initUsers = [
    { id: idd(), name: "user1", surname: "surn1", age: 30, inBan: false },
    { id: idd(), name: "user2", surname: "surn2", age: 31, inBan: false },
    { id: idd(), name: "user3", surname: "surn3", age: 32, inBan: false },
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
        inBan={user.inBan}
        banned={banned}
      />
    );
  });
  function banned(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.inBan = !user.inBan;
        }
        return user;
      })
    );
  }
  return  <div>{result}</div>;
  // Возьмите компонент User из предыдущего урока. Сделайте так, чтобы в нем появилась кнопка для бана юзера.
  
}

export default Users;
