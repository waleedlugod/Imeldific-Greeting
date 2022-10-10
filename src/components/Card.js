import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../images/down-arrow.svg";
import { ReactComponent as UpArrow } from "../images/up-arrow.svg";

function Card({ q, a }) {
	const [show, setShow] = useState(false);

	function toggleAnswer() {
		setShow(!show);
	}

	let answer;
	if (show) {
		answer = a;
	}

	return (
		<>
			<button onClick={toggleAnswer}>
				<h2>{q}</h2>
				{show ? <UpArrow /> : <DownArrow />}
			</button>
			{answer}
		</>
	);
}

export default Card;
