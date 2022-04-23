import React from 'react';

function Product({name,surname,salary}) {
	return <p>
		<span>{name}</span>  <span>{surname}</span>  <span>{salary}</span>
	</p>;
}

export default Product;