//** Import Statements
import { useState, useEffect } from 'react';
//** Setup (define helper functions and variables here)

function StockContainer(props) {
	//** Destructure Props
	const {} = props;

	//** State Variables
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	console.log(data);

	//** Destructure Props
	const {} = props;
	//** Component Logic
	useEffect(() => {
		fetch('https://tradestie.com/api/v1/apps/reddit')
			.then((response) => {
				if (!response.ok) {
					setError({
						status: response.status,
						statusText: response.statusText,
					});
				}
				return response.json(); // parse the response data
			})
			.then((result) => setData(result)) // set state when the data received
			.catch((err) => err); // return the error
	}, []);
	// dependencies array is empty so the fetch request is only run once
	//** Return JSX
	//** Return JSX
	if (!data) {
		return <div></div>;
	}
	//component logic
	//** Return JSX
	return (
		<div>
			{data.map((data) => {
				return <h4>Ticker:{data.ticker}</h4>;
			})}
		</div>
	);
}
export default StockContainer;
