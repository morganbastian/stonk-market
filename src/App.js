import './App.css';
import Home from './views/Home';
import StockInfo from './views/StockInfo';
import Search from './views/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/info/:symbol' element={<StockInfo />} />
				<Route path='/search' element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
