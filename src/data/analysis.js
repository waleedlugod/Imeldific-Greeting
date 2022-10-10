import A1 from "../components/A1";
import A2 from "../components/A2";
import A3 from "../components/A3";
import A4 from "../components/A4";
import A5 from "../components/A5";
import A6 from "../components/A6";

export const analysis = [
	{
		id: 0,
		q: "What is the message?",
		a: <A1 />,
	},
	{
		id: 1,
		q: "What is the purpose of the message?",
		a: <A2 />,
	},
	{
		id: 2,
		q: "How is the message conveyed by the text and/or image? Does the message have to be conveyed in this manner?",
		a: <A3 />,
	},
	{
		id: 3,
		q: "Who is the target audience of the message?",
		a: <A4 />,
	},
	{
		id: 4,
		q: "What is the effect of the message being conveyed in this manner to the receiver? Who benefits from the message being conveyed in this manner?",
		a: <A5 />,
	},
	{
		id: 5,
		q: "How might alternative perspectives be represented?",
		a: <A6 />,
	},
];
