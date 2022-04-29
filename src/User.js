import React from "react";
import UserField from "./UserField";
function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div>
      name:<UserField id={id} name={name} type='name' isEdit={isEdit} editUser={editUser}/>
      surname:<UserField id={id} name={surname} type='surname' isEdit={isEdit} editUser={editUser}/>
      age:<UserField id={id} name={age} type='age' isEdit={isEdit} editUser={editUser}/>
      <button onClick={() => toggleMode(id)}>click me</button>
    </div>
  );
}
export default User;
