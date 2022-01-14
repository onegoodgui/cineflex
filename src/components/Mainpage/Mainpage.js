import './style.css';
import {Topo} from '../Topo/Topo';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { seats } from '../CinemaRoom/CinemaRoom';

function Mainpage(){
    

    return(
        <>
            <Topo/>
            <div className="content-container">
                <span> Selecione o filme</span>
                <MovieList/>
            </div>
        </>
    )


}

 export default Mainpage

 function MovieList(){

    const [movies, setMovies] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    if(movies.length === 0) {
		return (<>
                    Carregando
                </>)
	}

    console.log(movies)

    return(
        <>
            <div className='movie-list'> 
                {movies.map((movie) => (
                        
                    <div className='movie' key={movie.id}>
                       <Link to={`filme/${movie.id}`}>
                            <img src={movie.posterURL} alt=''></img>
                       </Link>
                   </div>
                        
                ))}
           </div>
        </>
    )
 }