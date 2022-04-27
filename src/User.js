import React from "react";
function User({ id, name, surname, age, inBan, banned }) {
  return (
    <div>
      name: <span>{name}</span>;
      surname: <span>{surname}</span>;
      age:<span>{age}</span>;
      <span>{inBan ? "ban" : "no ban"}</span>;
      <button onClick={() => banned(id)}>click me</button>
    </div>
  );
}
export default User;
