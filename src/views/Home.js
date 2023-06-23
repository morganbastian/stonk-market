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
	const [sort, setSort] = useState('asc');


  const handleSort = () => {
    if (sort === 'dsc') {
      // make it descending
      console.log('currently descending')
      setSort('asc')
      setData(data.sort((a, b) => b.sentiment_score - a.sentiment_score));
    } else {
      // make it ascending
      console.log('currently ascending')
      setSort('dsc')
      setData(data.sort((a, b) => a.sentiment_score - b.sentiment_score));
    }
	};

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
			.then((result) => {

        setData(result.sort((a, b) => a.sentiment_score - b.sentiment_score))
      }) // set state when the data received
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
			<button onClick={handleSort}>Sort: {sort}</button>
			<div>
				{data.map((stock) => {
					return (
						<div>
							<h4>
								<Link to={`/info/${stock.ticker}`}>Ticker: {stock.ticker}</Link>
							</h4>
							<h4>Number of Comments: {stock.no_of_comments}</h4>
							<h4>Sentiment: {stock.sentiment}</h4>
							<h4>Sentiment Score: {stock.sentiment_score}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Home;
