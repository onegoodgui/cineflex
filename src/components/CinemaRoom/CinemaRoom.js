import './style.css';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {Topo} from "../Topo/Topo";
import {Footer} from "../Footer/Footer";
import Checkout from '../Checkout/Checkout';
import styled from 'styled-components';

export let solicitacao = {};
export let sessionInfo = [];

function CinemaRoom({nome, CPF, seatIds, keys, setNome, setCPF, setSeatIds, setKeys}){

    const {sessionId} = useParams();
    const [session,setSession] = useState([]);
    let [selecionado,setSelecionado] = useState([]);
    let navigate = useNavigate();
    let array = [];


    

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId}/seats`);
        console.log(sessionId);

        requisicao.then(resposta =>{
            setSession(resposta.data);
        })
    },[])

    if (session.length === 0){
        return (
            <>
                Carregando
            </>
        )
    }

    function changeStatus(index, seatNumber, isAvailable){
        if(isAvailable === true){
            session.seats[seatNumber-1].isAvailable = 'selecionado';
            setSelecionado(array);
            console.log(session.seats);

            
            setSeatIds([...seatIds, index]);
            setKeys([...keys,seatNumber]);

            console.log(keys)
        }
        else if (isAvailable === 'selecionado'){
            session.seats[seatNumber-1].isAvailable = true;
            setSelecionado(array);

            let arrayIndex = seatIds.indexOf(index);
            seatIds.splice(arrayIndex,1);
            keys.splice(arrayIndex, 1);

            console.log(keys)
        }
        else{
            alert('Esse assento não está disponível')
        }
    }
    
    function SolicitarReserva(ids, name, cpf, session){
        
        solicitacao = {
            ids: ids,
            name: name,
            cpf: cpf,
        }
        
        sessionInfo = session;
        keys.sort();
    
    
        const requisicao = axios.post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`,solicitacao);
        requisicao.then((resposta) => {
            console.log(resposta);
            navigate('/sucesso');
        })

    }

    array = session.seats.map((seat) => (seat.isAvailable));

return(
    <>
        <Topo/>
            <Content>
                <div className="content-container">
                    <span> Selecione o(s) assento(s)</span>
                    <div className='assentos'>

                        {session.seats.map((seat, index) => {

                            let numberIndex = seat.id;
                            let seatNumber = seat.name;
                            selecionado.push(seat.isAvailable)

                            if(seat.name < 10 && selecionado.length <10){
                                seat.name = `0${seat.name}`
                            }
                            return(<Assento status={seat.isAvailable} key={index+1} index={numberIndex} onClick={() => changeStatus( numberIndex, seatNumber, seat.isAvailable)}> {seat.name} </Assento>)})}

                    </div>
                    <Legenda/>
                    <PersonalInfo>
                        <span>Nome do comprador:</span>
                        <Info placeholder='Digite seu nome...' onChange={e => setNome(e.target.value)}></Info>
                        <span>CPF do comprador:</span>
                        <Info placeholder='Digite seu CPF...' onChange={e => setCPF(e.target.value)}></Info>
                    </PersonalInfo>
                    <button onClick={() => SolicitarReserva(seatIds, nome, CPF,session)}> Reservar assento(s)</button>                
                </div>
            </Content>
        <Footer img={session.movie.posterURL} movieName={session.movie.title} date={session.day.weekday} time={session.name} bar={' - '}/>
    </>
    )
}


function Legenda(){
    return(
    <div className='legenda'>
        <Assento status={'selecionado'}>
            <span>Selecionado</span>
        </Assento>
        <Assento status={true}>
            <span>Disponível</span>
        </Assento>
        <Assento status={false}>
            <span>Indisponível</span>
        </Assento>
    </div>
    )
}

const Content = styled.div`

    .content-container{
        padding: 67px 3% 117px 3%;
        height: 100%;
        align-items: center;

    }

    .assentos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }


    .legenda{
        width: 65%;
        
        display:flex;
        justify-content: space-between;
    }


`

const Assento = styled.div`
    width: 26px;
    height: 26px;

    background: ${props => props.status ==='selecionado' ? '#8DD7CF': props.status === true ? `#C3CFD9`:`#FBE192` };
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;

    margin-left: 3.5px;
    margin-right: 3.5px;
    margin-bottom: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 11px;
    
    position: relative;

    ::hover{
        cursor: cell;
    }
    span{
        position: absolute;
        top: 25px;

        width:fit-content;
        height:fit-content;
        min-height: unset;

        font-size:13px;
    }
`
const PersonalInfo = styled.div`
    font-size: 18px;

    width:100%;
    height: 50px;

    margin-top:42px;

    span{

        width:fit-content;
        height:fit-content;
        min-height: unset;

        font-size:18px;
    }

`

const Info = styled.input`

    width:100%;
    height:100%;

    position: relative;
    padding-left:10px;

    font-size: 18px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;

    margin-bottom: 7px;

    ::placeholder{

        font-size: 18px;
        font-style: italic;

        color: #AFAFAF;
    }
`

export const Button = styled.button`

width: fit-content;
height: 42px;

margin-top: 0px;
padding: 0 45px;

background: #E8833A;

border-radius: 3px;
border: 3px solid #E8833A;

color: white;

`
export default CinemaRoom