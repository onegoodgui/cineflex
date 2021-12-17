import './style.css';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {Topo} from "../Topo/Topo";
import {Footer} from "../Footer/Footer";
import styled from 'styled-components';

function CinemaRoom(){

return(
    <>
        <Topo/>
            <Sala>
                <div className="content-container">
                    <span> Selecione o(s) assento(s)</span>
                </div>
            </Sala>
        <Footer/>
    </>
)
}

const Sala = styled.div`

    .content-container{
        padding: 67px 5% 117px 5%;
        height: 100%;
    }

    .assento{
        background: #C3CFD9;
        border: 1px solid #808F9D;
        box-sizing: border-box;
        border-radius: 12px;
    }

`

export default CinemaRoom