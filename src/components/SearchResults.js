//** Import Statements
import { useState } from 'react';
import TextField from '@mui/material/TextField';
//** Setup (define helper functions and variables here)

function SearchResults(props) {
	//** Destructure Props
	const {} = props;
	const [inputText, setInputText] = useState('');
	let inputHandler = (e) => {
		//convert input text to lower case
		const upperCase = e.target.value.toUpperCase();
		setInputText(upperCase);
	};

	return (
		<div>
			<div>
				<TextField
					id='outlined-basic'
					onChange={inputHandler}
					variant='outlined'
					fullWidth
					label='Search'
				/>
			</div>
		</div>
	);
	//** State Variables

	//** Component Logic

	//** Return JSX
	return <div>{/*replace with your JSX Here */}</div>;
}
export default SearchResults;
