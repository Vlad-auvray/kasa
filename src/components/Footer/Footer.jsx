import React from 'react';
import logo from "../../images/logo.svg";

export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo Kasa" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
