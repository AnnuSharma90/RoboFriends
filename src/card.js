import React from "react";

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-yellow dib br3 pa3 ma2 grow bw3 shadow-5">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};
export default Card;
