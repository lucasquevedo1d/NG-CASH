import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { ButtonTitulo, ButtonVoltar, Font, LogoImg, PaperResponsive, TituloSignup } from './styled';
import theme from '../../constants/Theme';
import banco from "../../img/banco.jpg"
import { Header } from '../../components/Header/Header';
import logo from "../../img/NG.cash (2).png"
import { useNavigate } from 'react-router-dom';
import UseForm from '../../Hooks/useFrom';
import axios from 'axios';
import { BASE_URL } from '../../constants/Url';
import { goToHome, goToLogin } from '../router/coordinator';
import swal from "sweetalert"
import { Copyright } from '../../components/Copyright/Copyright';
import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';



export default function SignUp() {
    const [form, onChange, clear] = UseForm({ username: "", password: "" })
    const [showPassword, setShowPassword] = useState(true)

    const navigate = useNavigate()


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      }



    const onSubmitSignUp = async (event) => {
        event.preventDefault()

        const body = {
            username: form.username,
            password: form.password
        }
        await axios.post(`${BASE_URL}/user`, body)
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                swal(res.data.message)
                clear()
                goToHome(navigate, res.data.accountId)
            })

            .catch((err) => {
                swal(err.response.data.message)
            })
    }

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
                <PaperResponsive variant="elevation" elevation={15} >
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
                            <TituloSignup>Abra a sua conta</TituloSignup>
                            <Box component="form" sx={{ mt: 3 }} onSubmit={onSubmitSignUp}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <OutlinedInput
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            name="username"
                                            autoComplete="name"
                                            autoFocus
                                            variant="standard"
                                            onChange={onChange}
                                            value={form.username}
                                            placeholder='Nome'

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>

                                        <OutlinedInput
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            type={showPassword ? 'password' : 'text'}
                                            id="password"
                                            variant="standard"
                                            onChange={onChange}
                                            value={form.password}
                                            placeholder='Senha'
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                  <IconButton 
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                  >
                                                    {showPassword ? <VisibilityOff /> : <Visibility/> }
                                                  </IconButton>
                                                </InputAdornment>
                                              }
                                        />
                                    </Grid>
                                </Grid>                   
                                <Button
                                    margin="normal"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 1, bgcolor: "black", color: 'white' }}
                                    color="primary"
                                >
                                    <ButtonTitulo>Cadastrar</ButtonTitulo>
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 1, bgcolor: "white", color: 'black' }}
                                    color="primary"
                                    onClick={() => goToLogin(navigate)}
                                >
                                    <ButtonVoltar>Voltar</ButtonVoltar>
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 9, color: "black" }} />
                        <br></br>
                    </Container>
                </PaperResponsive >
            </div>
        </ThemeProvider>
    );
}

