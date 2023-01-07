import React from 'react';

export default function Tag(props) {
	return (
		<div className="tagBloc">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}
