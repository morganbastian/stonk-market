import './App.css';
import Home from './views/Home';
import StockInfo from './views/StockInfo';
import Search from './views/Search';
import { Routes, Route } from 'react-router-dom';
import { Paper } from '@mui/material';

function App() {
	return (
		<div>
			<Paper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/info/:symbol' element={<StockInfo />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</Paper>
		</div>
	);
}

export default App;
