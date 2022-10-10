import React from "react";
import photo from "../images/photo.jpg";

function Header() {
	return (
		<div className="header">
			<h1>
				Imeldific Greeting: An Analysis on Imelda Marcos’ Electronic Billboard
				Birthday Greeting
			</h1>
			<img src={photo} alt="" />
		</div>
	);
}

export default Header;
