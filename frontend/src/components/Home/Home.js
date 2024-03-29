import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Divider, Card, CardMedia } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import MainPhotoUntagged from '../../mockData/images/MainPhotoUntagged.jpeg';
import frenchFlavourLogoResized from '../../mockData/images/frenchflavourlogo.png';
import PropTypes from 'prop-types';
import './mainPostsStyle.scss';
import { connect } from 'react-redux';

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
    height: '400px'
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
    'text-shadow': '3px 3px #787878'
  },
  secondaryPostContent: {
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
          <Container maxWidth="lg" className={classes.imageContainer}>
            <Header title="french flavour." />
          </Container>

          <Container maxWidth="lg">
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6} sm={12}>
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
                    Come, stay a while!

                </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={5}>
            <Grid item sm={12} lg={6}>
              <div className={classes.secondaryPostContent}>
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
                  A home of music, photography and storytelling, looking to share the tales of some fantastic human beings, whilst grooving to some tasteful tunes!
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                  This place brings together multiple passions of mine into one place, in a hope to connect like-minded friendly faces.
              </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                 My name is Andy, thank you for coming and I hope you enjoy!
              </Typography>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} xs={12}>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(state => ({
  footerMediaPlayerVisible: state.footerMediaPlayer.footerMediaPlayerVisible
}))(Home));
