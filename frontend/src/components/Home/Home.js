import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Divider } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import MainPosts from './MainPosts';
import post1 from '../../posts/NovemberPost1';
import MainPhotoUntagged from '../../images/MainPhotoUntagged.jpeg';
import FrenchFlavourLogo from '../../images/frenchFlavourLogoCropped.png';

const useStyles = makeStyles((theme) => ({
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
}));

function Home() {

  const classes = useStyles();
  const posts = [post1];

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
                <br/>
                <Typography variant="h5" color="inherit" paragraph>
                  Here to vibe. All the time!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <img src={FrenchFlavourLogo}/>
          </Grid>
          <Grid item md={6}>
            <img src={FrenchFlavourLogo}/>
          </Grid>
        </Grid>

      {
      /* 
        Chuck in something like - Hey I'm Andy, and welcome to French Flavour!
        CHuck in a photo of me as well
        Talk about interests and inspiration to make this 
      */
      }

        {/* INSERT A GRID LIST OF IMAGES */}

      </Container>
      <Footer
        title="Thanks for coming!"
        description="Hope you enjoyed it!"
        isSticky={false}
      />
    </>
  )
}

export default Home;
