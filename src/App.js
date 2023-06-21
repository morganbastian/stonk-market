import './App.css';
import Home from './views/Home';
import StockInfo from './views/StockInfo';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/info' element={<StockInfo />} />
			</Routes>
		</div>
	);
}

export default App;
