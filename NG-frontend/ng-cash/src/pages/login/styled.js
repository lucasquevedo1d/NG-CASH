import styled, {css}from "styled-components"

export const LogoImg = styled.img`
width: 200px;
margin-top: -70px;
`
export const TituloLogin = styled.h1`
font-family: 'Russo One', sans-serif;
color: black;
margin-left: -350px;
@media(max-width:400px) {
        font-family: 'Russo One', sans-serif;
        color: black;
        margin-left:0;
        margin-bottom: 50px;
}

`

export const ButtonLogin = styled.p`
font-family: 'Russo One', sans-serif;
font-size: small;
:hover{
    color: orange;
    transition: calc(0.5s);
}
`

export const ButtonSignup = styled.p`
font-family: 'Russo One', sans-serif;
font-size: small;
color: black;
:hover{
    color: orange;
    transition: calc(0.5s);
}
`


export const Pargraph = styled.p`
margin-top: -20px;
color: black;
`

