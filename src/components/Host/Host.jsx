import React from 'react';

export default function Host(props) {
	return (
		<aside className="host-compo">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}
