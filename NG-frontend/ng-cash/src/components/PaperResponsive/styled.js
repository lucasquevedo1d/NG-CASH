import { Paper } from "@mui/material"
import styled from "styled-components"

export const PaperResponsive = styled(Paper)`
margin-left: 500px;
margin-bottom: 5px; 
width: 500px;
@media(max-width:391px) {
    margin: auto;
    align-items: center;
    min-height: 100vh;
    width: 340px;
}
`