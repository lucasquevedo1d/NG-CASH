import * as React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { Balance, HomeButton, LogoImg, Value } from './styled';
import theme from '../../constants/Theme';
import { Paper } from '@mui/material';
import banco from "../../img/banco.jpg"
import { Header } from '../../components/Header/Header';
import logo from "../../img/NG.cash (2).png"
import { BASE_URL } from '../../constants/Url';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';
import { goToExtract } from '../router/coordinator';
import { Copyright } from '../../components/Copyright/Copyright';


export const Home = () => {
    useProtectPage()
    const navigate = useNavigate()
    const params = useParams()
    const [balance, setBalance] = useState({})


    const balanceHome = () =>{
        axios.get(`${BASE_URL}/balance/${params.id}`, { 
        headers: {
            Authorization: window.localStorage.getItem("token")
          }
        })
        .then((res) =>{
            console.log(res)
            setBalance(res.data.message)
        })

        .catch((err) =>{
            console.log(err)
        })
    }


    useEffect(() =>{
        balanceHome()
    },[])


    return (
        <ThemeProvider theme={theme} >
        <Header />
        <div style={{
            backgroundImage: `url(${banco})`,
            height: '130vh',
            with: '100%',
            backgroundSize: "cover"

        }}>
            <br></br>
            <Paper variant="elevation" elevation={15} sx={{ mr: 65, ml: 65, mb: 5 }}>
                <Container component="main" maxWidth="xs" sx={{ mb: 5 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <LogoImg src={logo} />
                            <Balance>Saldo</Balance>
                            <Value key={balance.id}>R$ {balance.balance},00</Value>
                        <Box component="form" sx={{ mt: 3 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='outlined' sx={{mb:2}} onClick={() => goToExtract(navigate, balance.id)}><HomeButton>Extrato</HomeButton></Button>
                                    <Button fullWidth variant='outlined' sx={{mb:2}}><HomeButton>Fazer Transferência</HomeButton></Button>
                                    <Button fullWidth variant='outlined' ><HomeButton>Transferências Realizadas</HomeButton></Button>
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>                   
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 9, color: "black" }} />
                    <br></br>
                </Container>
            </Paper >
        </div>
    </ThemeProvider>

    )
}