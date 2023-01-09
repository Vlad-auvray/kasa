import React from 'react';
import { useState } from "react";
import left from "../../images/left.svg";
import right from "../../images/right.svg";

export default function Carroussel({ slides }) {
	const [current, setCurrent] = useState(0); 
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); 
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); 
	};

	return (
		<section id ="carroussel-block">
			{length > 1 && (
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						current === index
							? "slider blend-mask width-mask active-anim"
							: "slider blend-mask width-mask"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
