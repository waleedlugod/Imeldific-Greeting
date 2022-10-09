import React from "react";

function Card({ q, a }) {
	return (
		<>
			<h4>{q}</h4>
			{a.map((text) => {
				return <p>{text}</p>;
			})}
		</>
	);
}

export default Card;
