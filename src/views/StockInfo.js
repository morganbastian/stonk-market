//** Import Statements
import Header from '../components/Header';
import ClickedStocks from '../components/ClickedStock';
import { Container } from '@mui/system';

//** Setup (define helper functions and variables here)

function StockInfo(props) {
	//** Destructure Props
	const {} = props;

	//** State Variables

	//** Component Logic

	//** Return JSX
	return (
		<div>
			<Header />
			<Container sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
				<ClickedStocks />
			</Container>
		</div>
	);
}
export default StockInfo;
