import { ThemeProvider } from "@emotion/react";
import theme from "./constants/Theme";
import { Router } from "./pages/router/router";

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;