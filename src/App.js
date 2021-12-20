
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Checkout from "./components/Checkout/Checkout";
import CinemaRoom from './components/CinemaRoom/CinemaRoom'
import Mainpage from './components/Mainpage/Mainpage'
import Movie from './components/Movie/Movie'

function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainpage/>}></Route>
					<Route path="/filme/:movieId" element={<Movie/>}></Route>
					<Route path='/sessao/:sessionId' element={<CinemaRoom/>}></Route>
					<Route path='/sucesso' element={<Checkout/>}></Route>
				</Routes>
			</BrowserRouter>
		
	);
}

export default App