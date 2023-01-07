import React from 'react';
import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Fleche from "../../images/down.svg";

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); 
	const [heightEl, setHeightEl] = useState(); 

	const toggleState = () => {
		
		setToggle(!toggle);
	};

	const refHeight = useRef(); 

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); 
	}, []);

	return (
		
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "fleche rotated" : "fleche"}
					src={Fleche}
					alt="fleche"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
