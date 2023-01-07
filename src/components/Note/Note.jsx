import React from 'react';
import emptyStar from "../../images/emptyStar.svg";
import Star from "../../images/star.svg";

export default function Note({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="note-compo">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={Star}
						alt="rating star"
					/>
				) : ( 
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
