import {
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
} from 'recharts';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//** Setup (define helper functions and variables here)

function Chart(props) {
	//** Destructure Props
	const { symbol } = useParams();
	const {} = props;

	//** State Variables
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	//console.log(data);

	//** Destructure Props
	const {} = props;
	//** Component Logic

	useEffect(() => {
		fetch(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=T3DKNFX8EZJN7WS5`
		)
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
	//** Return JSX
	return <div>Hello</div>;
}
export default Chart;
