import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
import photo from "./images/photo.jpg";

function App() {
	return (
		<div className="container">
			<Header />
			<img className="primary-photo" src={photo} alt="" />
			<Main />
			<Footer />
			<EasterEgg />
		</div>
	);
}

export default App;
