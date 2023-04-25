import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { ButtonTitulo, ButtonVoltar, TituloSignup } from './styled';
import theme from '../../constants/Theme';
import { Paper } from '@mui/material';
import banco from "../../img/banco.jpg"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        NG.CASH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
 

  return (
    <ThemeProvider theme={theme}>
        {/* <img src={ banco}></img> */}
        <Paper variant="elevation" elevation={15} sx={{mt:1, mr:50, ml:50, mb:5}}>
      <Container component="main" maxWidth="xs" sx={{mb:5}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <TituloSignup>Cadastrar</TituloSignup>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant='standard'
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />  
              </Grid>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='standard'
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
                  margin="normal"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt:1, bgcolor: "black", color:'white' }}
                  color="primary"
                >
              <ButtonTitulo>Cadastrar</ButtonTitulo>
            </Button>
            <Button
             type="submit"
             fullWidth
             variant="outlined"
             sx={{mt:1, bgcolor: "white", color:'black' }}
             color="primary"
            ><ButtonVoltar>Voltar</ButtonVoltar>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 9 }} />
      </Container>
      </Paper >
      
    </ThemeProvider>
  );
}