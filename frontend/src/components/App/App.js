import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LibreBaskervilleBold from '../../fonts/LibreBaskerville-Bold.ttf';
import Home from '../Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from '../AboutMe/AboutMe';
import Mixes from '../Mixes/Mixes';
import Stories from '../Stories/Stories';

function App() {

  // Custom font work
  const libreBaskervilleBold = {
    fontFamily: 'Libre Baskerville',
    fontStyle: 'bold',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('LibreBaskerville'),
      local('LibreBaskerville-Bold'),
      url(${LibreBaskervilleBold}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };

  const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
      typography: {
        fontFamily: 'Libre Baskerville',
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [libreBaskervilleBold],
          },
        },
      },
    });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mixes">
            <Mixes />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

