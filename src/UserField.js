import React, { useState } from "react";

function UserField({ id, name, type, editUser }) {
  const [isEdit, setIsedit] = useState(false);
  return (
    <td>
      {isEdit ? (
        <input
          value={name}
          onChange={(ev) => editUser(id, type, ev)}
          onBlur={() => setIsedit(false)}
        />
      ) : (
        <span onClick={() => setIsedit(true)}>{name}</span>
      )}
    </td>
  );
}
export default UserField;
