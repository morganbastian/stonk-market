//** Import Statements
import { useState, useEffect } from 'react';
import StockContainer from '../components/StockContainer';
import Filter from '../components/Filter';
import FilteredStock from '../components/FilteredStock';
import { Link } from 'react-router-dom';
//** Setup (define helper functions and variables here)

function Home(props) {
	//** Destructure Props
	const {} = props;

	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [sortType, setSortType] = useState('sentiment score');

	useEffect(() => {
		const sortArray = (type) => {
			const types = {
				sentiment_score: 'sentiment score',
			};
			const sortProperty = types[type];
			const sorted = [...data].sort(
				(a, b) => b[sortProperty] - a[sortProperty]
			);
			setData(sorted);
		};

		sortArray(sortType);
	}, [sortType]);

	console.log(data);
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
	//** State Variables

	//** Component Logic

	//** Return JSX
	return (
		<div>
			<select onChange={(e) => setSortType(e.target.value)}>
				<option value='' disabled selected hidden>
					Sort by
				</option>
				<option value='high-sentiment'>Highest Sentiment Score</option>
				<option value='low-sentiment'>Lowest Sentiment Score</option>
			</select>
			<div>
				{data.map((data) => {
					return (
						<div>
							<h4>
								<Link to={`/info/${data.ticker}`}>Ticker: {data.ticker}</Link>
							</h4>
							<h4>Number of Comments: {data.no_of_comments}</h4>
							<h4>Sentiment: {data.sentiment}</h4>
							<h4>Sentiment Score: {data.sentiment_score}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Home;
