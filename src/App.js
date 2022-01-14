
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import Checkout from "./components/Checkout/Checkout";
import CinemaRoom from './components/CinemaRoom/CinemaRoom'
import Mainpage from './components/Mainpage/Mainpage'
import Movie from './components/Movie/Movie'

function App() {

	const [nome,setNome] = useState(null);
    const [CPF, setCPF] = useState(null);
    const [seatIds,setSeatIds] = useState([]);
	const [keys, setKeys] = useState([]);

	return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Mainpage/>}></Route>
					<Route path="/filme/:movieId" element={<Movie/>}></Route>
					<Route path='/sessao/:sessionId' element={<CinemaRoom nome={nome} CPF={CPF} keys={keys} seatIds={seatIds} setNome={setNome} setCPF={setCPF} setSeatIds={setSeatIds} setKeys={setKeys}/>}></Route>
					<Route path='/sucesso' element={<Checkout nome={nome} CPF={CPF} keys={keys} setNome={setNome} setCPF={setCPF} setSeatIds={setSeatIds} setKeys={setKeys}/>}></Route>
				</Routes>
			</BrowserRouter>
		
	);
}

export default App