import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navbar from "../Navbar/Navbar";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<Link to="/" className="toHome" > 
                <img className="logo" src={logo} alt="logo Kasa" />
                 </Link>
			</figure>
			<Navbar className="nav-header" />
		</header>
	);
}

