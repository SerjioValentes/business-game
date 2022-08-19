import React from 'react';
import LogInPage from "./components/pages/login";
import HomePage from "./components/pages/main";
import {theme} from './components/common/style'
import { ThemeProvider } from "@mui/material/styles";

function App() {



  return (
    <div>
        <ThemeProvider theme={theme}>
        <LogInPage />
     {/*<HomePage />*/}
        </ThemeProvider>
    </div>
  );
}

export default App;

