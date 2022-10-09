import React, { useState } from "react";

function Card({ q, a }) {
	const [show, setShow] = useState(false);

	function toggleAnswer() {
		setShow(!show);
	}

	return (
		<>
			<button onClick={toggleAnswer}>
				<h2>{q}</h2>
			</button>
			{show &&
				a.map((text) => {
					return <p>{text || "no answer yet"}</p>;
				})}
		</>
	);
}

export default Card;
