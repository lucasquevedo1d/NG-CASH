import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/Theme';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import city from "../../img/skyline.jpg"
import { Header } from '../../components/Header/Header';
import logo from "../../img/NG.cash (2).png"
import { BASE_URL } from '../../constants/Url';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useProtectPage } from '../../Hooks/useProtectPage';
import { BackButton, LogoImg, SubTitleExtract, TitleExtract } from './styled';
import { goToHome } from '../router/coordinator';
import { Copyright } from '../../components/Copyright/Copyright';
import swal from "sweetalert"
import { PaperResponsive } from '../../components/PaperResponsive/styled';




export const Extract = () => {
    useProtectPage()
    const [extractIn, setExtractIn] = useState([])
    const [extractOut, setExtractOut] = useState([])
    const navigate = useNavigate()
    const params = useParams()

    const showExtractIn = async () => {
        axios.get(`${BASE_URL}/CreditTransiction/${params.id}`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setExtractIn(res.data.message)
            })

            .catch((err) => {
                swal(err.response.data.message)
            })

    }

    const showExtractOut = async () => {
        axios.get(`${BASE_URL}/debitTransiction/${params.id}`, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
            .then((res) => {
                setExtractOut(res.data.message)
            })

            .catch((err) => {
                alert(err.response.data.message)
            })

    }

    useEffect(() => {
        showExtractIn()
        showExtractOut()
    }, [])
    return (
        <ThemeProvider theme={theme} >
            <Header />
            <div style={{
                backgroundImage: `url(${city})`,
                minHeight: '170vh',
                with: '100%',
                backgroundSize: "cover"

            }}>
                <br></br>
                <PaperResponsive variant="elevation" elevation={15}>
                    <Container component="main" maxWidth="xs">
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
                            <TitleExtract>Extrato</TitleExtract>
                            <Box component="form" sx={{ mt: 3 }} >
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <SubTitleExtract>Entradas</SubTitleExtract>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Data</TableCell>
                                                    <TableCell>Nome</TableCell>
                                                    <TableCell align="right">Valor</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {extractIn.map((row) => (
                                                    <TableRow key={row.accountId}>
                                                        <TableCell>{row.createdAt}</TableCell>
                                                        <TableCell>{row.username}</TableCell>
                                                        <TableCell align="right">{new Intl.NumberFormat('pt-BR', {
                                                            style: 'currency',
                                                            currency: 'BRL'
                                                        }).format(row.value)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        <SubTitleExtract>Saídas</SubTitleExtract>
                                        <Table size="small" sx={{ color: 'black' }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Data</TableCell>
                                                    <TableCell>Nome</TableCell>
                                                    <TableCell align="right">Valor</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {extractOut.map((row) => (
                                                    <TableRow>
                                                        <TableCell>{row.createdAt}</TableCell>
                                                        <TableCell>{row.username}</TableCell>
                                                        <TableCell align="right">{new Intl.NumberFormat('pt-BR', {
                                                            style: 'currency',
                                                            currency: 'BRL'
                                                        }).format(row.value)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                                <br></br>
                                <Button fullWidth variant='contained' sx={{ mb: 2 }} onClick={() => goToHome(navigate, params.id)}><BackButton>Voltar</BackButton></Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 5, color: "black" }} />
                        <br></br>
                    </Container>
                </PaperResponsive >
            </div>
        </ThemeProvider>
    )
}

export default Extract