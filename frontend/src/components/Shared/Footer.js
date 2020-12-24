import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
      <footer className={isSticky ? classes.stickyFooter : classes.nonStickyFooter}>
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
              Andy French
          </Link>
            {' '}{new Date().getFullYear()} {'.'}
          </Typography>
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
