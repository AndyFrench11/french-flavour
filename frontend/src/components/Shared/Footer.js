import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Grid } from '@material-ui/core';


const styles = theme => ({
  stickyFooter: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  },
  nonStickyFooter: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
  openSansFont: {
    fontFamily: 'Lato'
  }

});

class Footer extends React.Component {

  render() {

    const { classes, description, title, isSticky } = this.props;

    return (
      <footer className={classes.nonStickyFooter}>
        <Container maxWidth="lg" className={classes.footerContainer}>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
            className={classes.openSansFont}
          >
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" className={classes.openSansFont}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/French-Flavour-104281558094100" className={classes.openSansFont}>
              french flavour
          </Link>
            {' '}{new Date().getFullYear()} {'.'}
          </Typography>
          <Grid container align="center" justify="center">
              <Grid item md={1} sm={1} xs={1}>
                <IconButton color="inherit" aria-label="upload picture" align="center" component="span"
                  onClick={() => window.open("https://www.instagram.com/french__flavour/", "_blank")}
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>
              <Grid item md={1} sm={1} xs={1}>
              <IconButton color="inherit" aria-label="upload picture" align="center" component="span" 
                onClick={() => window.open("https://www.facebook.com/French-Flavour-104281558094100", "_blank")}
              >
                <FacebookIcon />
              </IconButton>
              </Grid>
          </Grid>


        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Footer);
