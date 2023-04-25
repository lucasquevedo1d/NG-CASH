import { createTheme } from '@mui/material/styles'
import { corPrimaria, corNeutra } from './Color'

const theme = createTheme({
    palette:{
        primary:{
            main:corPrimaria,
            contrastText:"##FFFFFF"
        },
        text:{
            primary:corNeutra
        },
        inherit:{
            primary:'#FFFFFF',
            contrastText:corNeutra
        }
    }
})

export default theme