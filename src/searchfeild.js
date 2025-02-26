import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				type="search"
				placeholder="search robots"
				className="pa3 ba b--yellow bg-lightest-blue"
				onChange={searchChange}
			/>
		</div>
	);
};
export default SearchBox;
