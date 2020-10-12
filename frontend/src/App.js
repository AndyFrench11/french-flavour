import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './blog/Blog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Blog />
    </ThemeProvider>
  );
}

export default App;

