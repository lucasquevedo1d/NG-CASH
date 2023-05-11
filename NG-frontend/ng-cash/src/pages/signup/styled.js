import { Paper } from "@mui/material";
import styled from "styled-components";

export const TituloSignup = styled.h2`
font-family: 'Russo One', sans-serif;
color: black;
`

export const ButtonTitulo = styled.p`
font-family: 'Russo One', sans-serif;
font-size: smaller;
color: white;
:hover{
    color: orange;
    
    transition: calc(1s);
}
`

export const ButtonVoltar = styled.p`
font-family: 'Russo One', sans-serif;
font-size: smaller;
color: black;
:hover{
    color: orange;
    transition: calc(0.5s);
}
`

export const LogoImg = styled.img`
width: 160px;
margin-top: 50px;
`

export const Font = styled.p`
font-family: 'Russo One', sans-serif;
font-size: smaller;
`

export const PaperResponsive = styled(Paper)`
margin-left: 500px;
margin-bottom: 5px; 
width: 500px;
@media(max-width:400px) {
    margin: auto;
    height: 100vh;
    width: 300px;
}
`