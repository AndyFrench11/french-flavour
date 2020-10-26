import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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

  const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
      typography: {
        fontFamily: ['Libre Baskerville', 'Open Sans'],
        fontWeightRegular: 300
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

