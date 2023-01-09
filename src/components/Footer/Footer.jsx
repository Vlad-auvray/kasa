import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Footer() {
	return (
		<footer className="footer-block">
			<Link to="/" onClick="window.scrollTo(0, 0);" className="toHome" >
			<img src={logo} alt="logo Kasa" />
			</Link>
			<p className="footer-block__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
