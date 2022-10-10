import React from "react";
import Card from "./Card";

import { analysis } from "../data/analysis";

function Main() {
	return (
		<div className="main">
			{analysis.map((analysis) => {
				return <Card key={analysis.id} {...analysis} />;
			})}
		</div>
	);
}

export default Main;
