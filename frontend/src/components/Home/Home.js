import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Divider, Link } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import MainPosts from './MainPosts';
import post1 from '../../posts/NovemberPost';
import MainPhotoUntagged from '../../images/MainPhotoUntagged.jpeg';
import frenchFlavourLogoCropped from '../../images/frenchFlavourLogoCropped.png';
import transparentFFLogo from '../../images/transparentFFLogo.png';
import yellowlogo from '../../images/yellowlogo.png';

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
    height: '600px'
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
  const sections = [
    { title: 'Mixes', url: 'mixes' },
    { title: 'Music', url: 'music' },
    { title: 'Stories', url: 'stories' },
    { title: 'Photos', url: 'aboutme' },
  ];

  const posts = [post1];

  return (
    <>
      <Paper
        style={{ backgroundImage: `url(${MainPhotoUntagged}` }}
        className={classes.mainBackgroundPhoto}
      >
        <Container maxWidth="fixed" className={classes.imageContainer}>
            <Header title="french flavour." sections={sections} />
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
                <Typography variant="h5" color="inherit" paragraph className={classes.mainHeader}>
                  Here to vibe. All the time.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      {/* <Container maxWidth="lg">
          <LargeFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <SmallFeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
      </Container> */}
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
          <img src={frenchFlavourLogoCropped}></img>
          {/* <img src={frenchFlavourLogoCropped}></img> */}
        </Grid>

        {/* <Grid container spacing={5} className={classes.mainGrid}>
          <img src={yellowlogo}></img>
        </Grid> */}
        

        <Grid container spacing={5} className={classes.mainGrid}>
          <MainPosts title="Recent Updates" posts={posts} />
        </Grid>
      </Container>
      <Footer
        title="Thanks for coming!"
        description="Hope you enjoyed it!"
      />
    </>
  )
}

export default Home;
