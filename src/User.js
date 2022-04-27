import React from "react";
function User({ id, name, surname, age, isEdit, toggleMode, editUser }) {
  return (
    <div>
      name:{isEdit? <input value={name} onChange={(ev)=>editUser(id,'name',ev)}></input>:<span>{name}</span>} ;
      surname:{isEdit? <input value={surname} onChange={(ev)=>editUser(id,'surname',ev)}></input>:<span>{surname}</span>} ;
      age:{isEdit? <input value={age} onChange={(ev)=>editUser(id,'age',ev)}></input>:<span>{age}</span>};
      <button onClick={() => toggleMode(id)}>click me</button>
    </div>
  );
}
export default User;
