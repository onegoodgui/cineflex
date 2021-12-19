import './style.css'
import styled from 'styled-components'

export function Footer({img, movieName, date, time, bar}){


    return(
        <FooteR>
            <img src={img}></img>
            <div className='sessionInfo'>
                <h1> {movieName} </h1>
                <h1>{date} {bar} {time}</h1>
            </div>
        </FooteR> 
    )
}

const FooteR = styled.footer`
width: 100%;
height: 117px;
background-color: #C3CFD9;
display: flex;
align-items: center;
position: absolute;
bottom: 0px;
z-index: 1;

img{
    background-color:#FFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    height: 80%;
    padding: 3% 2%;
    margin-left:10px;
    object-fit: contain;
}

h1{
    color: #293845;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;
    margin-left: 14px;
}
`;

const sessionInfo = styled.div`

display: flex;
flex-direction: column;

`