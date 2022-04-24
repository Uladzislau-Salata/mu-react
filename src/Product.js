import React from "react";

function Product({key, id, name, surname, age }) {
//   console.log(id);
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}

export default Product;
