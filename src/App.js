import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import "./App.css";
import But from "./but.js";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <article class='background'>
        
        <But/>
      </article>
    </ThemeProvider>
  );
}

export default App;
