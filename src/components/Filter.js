import { useState, useEffect } from 'react';
function Filter(props) {
	//** Destructure Props
	const { stockdata } = props;

	//** State Variables
	const [data, setData] = useState([]);
	const [sort, setSort] = useState('');
	//console.log('data:', stockdata);

	const handleSort = () => {
		setSort(
			[...stockdata].sort((a, b) => b.sentiment_score - a.sentiment_score)
		);
	};
	// useEffect(() => {
	// 	const handleSort = () => {
	// 		setSort(
	// 			[...stockdata].sort((a, b) => b.sentiment_score - a.sentiment_score)
	// 		);
	// 	};
	// }, [sort]);
	//** Component Logic

	//** Return JSX
	return (
		<div>
			<button onClick={handleSort}>Sort</button>
		</div>
	);
}
export default Filter;
