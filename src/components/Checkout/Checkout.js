import './style.css';

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Topo} from "../Topo/Topo";
import styled from 'styled-components';
import { seats, sessionInfo, solicitacao } from '../CinemaRoom/CinemaRoom';



export default function Checkout(){
    
    return(
        <>
        <Topo/>
        <ContentContainer>
                <span> Pedido feito com sucesso! </span>
                <Item>
                    <span> Filme e sessão </span>
                    <p>{sessionInfo.movie.title}</p>
                    <p>{sessionInfo.day.date} {' '} {sessionInfo.name}</p>
                </Item>
                <Item>
                    <span> Ingressos </span>
                    {seats.map((seat) => (<p key={seat}>Assento {seat}</p>))}
                </Item>
                <Item>
                    <span> Comprador </span>
                    <p> Nome: {solicitacao.name}</p>
                    <p> CPF: {solicitacao.cpf}</p>
                </Item>
                <Link to={`/`}>
                    <button>Voltar pro Home</button>
                </Link>
        </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    height: inherit;
    width: 100%;
    position: absolute;
    top: 40px;

    display: flex;
    flex-direction: column;
    

    

    span{
        color:#247A6B;

        font-weight: bold;

        padding: 67px 25% 0 25%;
        
        text-align: center;
        letter-spacing: 0.04em;
    }

`
    const Item = styled.div`
    
    margin: 0 5%;

    span{
        min-height: unset;
        width: fit-content;

        color: black;
        font-size: 20px;
        font-weight: bold;

        padding-top:40px;
        padding-bottom: 10px;
        padding-left:unset;
        text-align:start;

    }

    p{
        font-size:22px;
        font-weight:normal;

        line-height:26px;
    }
    
    
    `
