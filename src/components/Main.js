import React from "react";
import Card from "./Card";

import { analysis } from "../data/analysis";

function Main() {
	return (
		<>
			{analysis.map((data) => {
				return <Card key={data.id} {...data} />;
			})}
		</>
	);
}

export default Main;
