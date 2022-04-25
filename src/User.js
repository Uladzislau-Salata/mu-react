import React from "react";
function User({id, name,surname,age}) {
return <div> id: {id}; name: <span>{name}</span>; surname: <span>{surname}</span>; age: <span>{age}</span></div>
}
export default User;