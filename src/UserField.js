import React from "react";
function UserField({id,name,type,isEdit,editUser}) {
    return isEdit? <input value={name} onChange={ev=>(editUser(id,type,ev))}></input>:<span>{name}</span>
}
export default UserField;