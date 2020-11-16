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
import Music from '../Music/Music';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {

  const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
      typography: {
        fontFamily: ['Libre Baskerville', 'Lato'],
        fontWeightRegular: 300
      },
    });

  return (
    <Router basename="/React">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mixes">
            <Mixes />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

