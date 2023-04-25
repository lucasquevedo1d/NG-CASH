import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/Theme";
import Login from "./pages/login/login"
// import { Header } from "./components/Header/Header";
import { Router } from "./pages/router/router";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;