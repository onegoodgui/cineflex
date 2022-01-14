import './style.css';

import {useNavigate } from "react-router-dom";
import {Topo} from "../Topo/Topo";
import styled from 'styled-components';
import { sessionInfo} from '../CinemaRoom/CinemaRoom';



export default function Checkout({nome, CPF, keys, setNome, setCPF, setSeatIds, setKeys}){

    const navigate = useNavigate();

    function handleGoHome(){
        setNome(null);
        setCPF(null);
        setSeatIds([]);
        setKeys([]);
        navigate('/');
    }
    
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
                    {keys.map((key) => (<p key={key}>Assento {key}</p>))}
                </Item>
                <Item>
                    <span> Comprador </span>
                    <p> Nome: {nome}</p>
                    <p> CPF: {CPF}</p>
                </Item>
                
                    <Button onClick={handleGoHome}>Voltar pro Home</Button>


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

    const Button = styled.button`
    margin: 80px auto 0 auto;
    `
