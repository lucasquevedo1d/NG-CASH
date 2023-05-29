import axios from "axios"
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import criança from "../../img/criançaBanco.png"
import { BASE_URL } from "../../constants/Url";
import UseForm from "../../Hooks/useFrom";
import theme from "../../constants/Theme";
import logo from "../../img/NG.cash (2).png"
import { ButtonLogin, ButtonSignup, LogoImg, Pargraph, TituloLogin } from "./styled";
import { goToHome, goToSignup } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert"
import { useState } from "react";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';




const Login = () => {
  const [form, onChange, clear] = UseForm({ username: "", password: "" })
  const [showPassword, setShowPassword] = useState(true)
  const navigate = useNavigate()



  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }


  const onSubmitLogin = async (event) => {
    event.preventDefault()

    const body = {
      username: form.username,
      password: form.password
    }

    await axios.post(`${BASE_URL}/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token)
        clear()
        goToHome(navigate, res.data.accountId)
      })

      .catch((err) => {
        swal(err.response.data.message)
      })
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${criança})`,
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <LogoImg src={logo} />
              <TituloLogin>Login</TituloLogin>
              <Pargraph>Seja bem vindo de volta! preencha os campos e realize o login</Pargraph>
              <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmitLogin}>
                <OutlinedInput
                sx={{mb:2}}
                  margin="dense"
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
                <OutlinedInput
                  margin="dense"
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "black", color:'white' }}
                  color="primary"
                >
                  <ButtonLogin>Entrar</ButtonLogin>
                </Button>
                <Grid container>
                  <Button variant="outlined" fullWidth color="inherit" onClick={() => goToSignup(navigate)}>
                   <ButtonSignup>{"Não tem um conta? Crie agora"}</ButtonSignup> 
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>

    </div>
  );
}


export default Login;
