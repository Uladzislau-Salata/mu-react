import React from "react";
import UserField from "./UserField";
function User({ id, name, surname, age,editUser }) {
  
  return (
    <tr>
     <UserField id={id} name={name} type='name' editUser={editUser}/>
     <UserField id={id} name={surname} type='surname' editUser={editUser}/>
     <UserField id={id} name={age} type='age' editUser={editUser}/>
    </tr>
  );
}
export default User;
