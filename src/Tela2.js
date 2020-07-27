import React, { Component } from 'react'
import styled from "styled-components";



const Tela2 = (props) => {
console.log(props);

const TesteStyled = styled.div`
background: #e7a61a;
border-style: solid;
border-color: black;
height: 400px;
width: 25%;
border-radius: 5px;
margin-top: 140px;
margin-left: 550px;
box-shadow: -1px 3px 5px 1px rgba(0,0,0,0.75);
`;

const ImageStyled = styled.img`
height: 150px;
width: 50%;
margin-left: 80px;
`;


const PosicaoStyledName = styled.div`
text-align: center;
font-size: 25px;
font-style: oblique;
font-weight: bold;
`;

const PosicaoStyled = styled.div`
text-align: justify;
font-size: 20px;
margin-top: 20px;
font-style: oblique;
padding: 5px;
`;

return(

<TesteStyled>
<ImageStyled src={props.location.state.infosPoke.sprites.front_shiny}/> 
<PosicaoStyledName> {props.location.state.infosPoke.name}</PosicaoStyledName>
<PosicaoStyled>Altura: {props.location.state.infosPoke.height}</PosicaoStyled>
<PosicaoStyled>Habilidade 1: {props.location.state.infosPoke.abilities[0].ability.name.toString()}</PosicaoStyled>
<PosicaoStyled>Habilidade 2: {props.location.state.infosPoke.abilities[1].ability.name.toString()}</PosicaoStyled>

</TesteStyled>


    );
}





export default Tela2;