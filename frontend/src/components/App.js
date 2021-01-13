import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mixes from './Mixes/Mixes';
import Stories from './Stories/Stories';
import Music from './Music/Music';
import ErrorPage from './ErrorPage/ErrorPage';
import Photography from './Photography/Photography';
import FooterMediaPlayer from './Shared/FooterMediaPlayer';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {

    const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
      typography: {
        fontFamily: ['Libre Baskerville', 'Lato'],
        fontWeightRegular: 300
      },
    });

    const { footerMediaPlayerVisible } = this.props;

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
            <Route path="/photography">
              <Photography />
            </Route>
            <Route path="/error">
              <ErrorPage />
            </Route>
          </Switch>
          { footerMediaPlayerVisible ? <FooterMediaPlayer /> : null }
        </ThemeProvider>
      </Router>
    );
  }
}

export default connect(state => ({
  footerMediaPlayerVisible: state.footerMediaPlayer.footerMediaPlayerVisible
}))(App);

