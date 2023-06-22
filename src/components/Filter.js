import { useState, useEffect } from 'react';
function Filter(props) {
	//** Destructure Props
	const { stockdata } = props;

	//** State Variables
	const [data, setData] = useState([]);
	const [sortType, setSortType] = useState('high-sentiment');
	//console.log('data:', stockdata);

	useEffect(() => {
		const sortArray = (type) => {
			const types = {
				sentiment_score: 'sentiment-score',
			};
			const sortProperty = types[type];
			const sorted = [...stockdata].sort(
				(a, b) => b[sortProperty] - a[sortProperty]
			);
			setData(sorted);
		};

		sortArray(sortType);
	}, [sortType]);
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
		</div>
	);
}
export default Filter;
