import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {Topo} from "../Topo/Topo";
import {Footer} from "../Footer/Footer";

import './style.css';

function Movie(){
    const {movieId} = useParams();

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);

        requisicao.then(resposta =>{
            setMovie(resposta.data);
        })
    },[])

    if (movie.length === 0){
        return (<>
                    Carregando
                </>)
    }

    const days = movie.days
    console.log(movie)
    
    return(
        <>
            <Topo/>
            <div className="content-container">
                <span> Selecione o horário</span>
                <Data days={days}/>
            </div>
            <Footer img={movie.posterURL} movieName={movie.title}/>
        </>
    )

}

export default Movie

function Data({days}){
    console.log(days)
    return(
        <>
            {days.map((day) => (<>
                                    <span className="data-e-hora" key={day.id}>{day.weekday} {day.date}</span>
                                    <div className="horarios">
                                        {day.showtimes.map((date) => (
                                            <>
                                                <Link to={`/sessao/${date.id}`}>
                                                    <span key={date.id}>{date.name}</span>
                                                    {console.log(date.id)}
                                                </Link>
                                            </>
                                        ))}
                                    </div>

                                </>))
            }
        </>
    )
}
