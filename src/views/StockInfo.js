//** Import Statements
import ClickedStocks from '../components/ClickedStock';
import Chart from '../components/Chart';
//** Setup (define helper functions and variables here)

function StockInfo(props) {
	//** Destructure Props
	const {} = props;

	//** State Variables

	//** Component Logic

	//** Return JSX
	return (
		<div>
			<ClickedStocks />
			<Chart />
		</div>
	);
}
export default StockInfo;
