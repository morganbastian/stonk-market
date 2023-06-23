//** Import Statements
import { Paper, Container } from '@mui/material';
import StockContainer from '../components/StockContainer';
import Header from '../components/Header';

//** Setup (define helper functions and variables here)

function Home(props) {
	//** Destructure Props
	const {} = props;

	//** State Variables

	//** Component Logic

	//** Return JSX
	return (
		<div>
			<Paper>
				<Header />
				<Container sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
					<StockContainer />
				</Container>
			</Paper>
		</div>
	);
}
export default Home;
