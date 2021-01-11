import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Divider, Card, CardMedia } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import MainPhotoUntagged from '../../mockData/images/MainPhotoUntagged.jpeg';
import frenchFlavourLogoResized from '../../mockData/images/frenchflavourlogo.png';
import PropTypes from 'prop-types';
import './mainPostsStyle.scss';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mainBackgroundPhoto: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  imageContainer: {
    height: '450px'
  },
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  logo: {
    marginLeft: '100px',
    marginTop: '100px'
  }
});

class Home extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <>
        <Paper
          style={{ backgroundImage: `url(${MainPhotoUntagged}` }}
          className={classes.mainBackgroundPhoto}
        >
          <Container maxWidth="fixed" className={classes.imageContainer}>
            <Header title="french flavour." />
          </Container>

          <Container maxWidth="lg">
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    An intersection of music production, mixing, photography and storytelling.
                </Typography>
                  <Divider />
                  <br />
                  <Typography variant="h5" color="inherit" paragraph>
                    Here to vibe. All the time!
                </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={5}>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  gutterBottom
                >
                  Welcome!
                </Typography>
                <Divider />
                <br />
                <Typography variant="h6" color="inherit" paragraph>
                  Welcome to french flavour.
              </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  My name is Andy and this place is a home to bring together the passions of my life in a hope to bring people closer together.
              </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  This website is a home for music, photography and ultimately, storytelling, in an attempt to share the tales of some fantastic human beings.
              </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                  I hope you enjoy!
              </Typography>
              </div>
            </Grid>
            <Grid item md={6}>
              <Card raised className="Banner">
                <CardMedia
                  className="Media"
                  image={frenchFlavourLogoResized}
                >
                </CardMedia>
              </Card>
            </Grid>
          </Grid>

        </Container>
        <Footer
          title="Thanks for coming!"
          description="Hope you enjoyed it!"
          isSticky={false}
        />
      </>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
