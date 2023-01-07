import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar-header">
			<Link to="/" className="navbar-header_link-home">
				Accueil
			</Link>
			<Link to="/about" className="navbar-header_link-about">
				A Propos
			</Link>
		</nav>
	);
}
