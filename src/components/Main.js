import React from "react";
import Card from "./Card";

import { analysis } from "../data/analysis";

function Main() {
	return (
		<>
			{analysis.map((analysis) => {
				return <Card key={analysis.id} {...analysis} />;
			})}
		</>
	);
}

export default Main;
