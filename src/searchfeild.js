import React from 'react';

const SearchBox =({searchfield,searchChange}) =>{
	return(
		<div class='pa2'>
		<input 
		type='search' 
		placeholder='search robots'
		class='pa3 ba b--yellow bg-lightest-blue'
		onChange= {searchChange}
		/>
		</div>
		);
}
export default SearchBox;