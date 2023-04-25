import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonPosition, ButtonToolbar, LogoImg, ToolbarPosition } from './styled';
import LogoPreto from "../../img/NG-preto.png"
import { goToLogin } from '../../pages/router/coordinator';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <ToolbarPosition>
         <LogoImg src={LogoPreto}/>
         <ButtonPosition>
          <Button sx={{color:'white'}} onClick={() => goToLogin(navigate)}><ButtonToolbar>Login</ButtonToolbar></Button>
          </ButtonPosition>
          </ToolbarPosition>
      </AppBar>
    </Box>
  );
}