import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import Header from './Header';
import LargeFeaturedPost from './LargeFeaturedPost';
import SmallFeaturedPost from './SmallFeaturedPost';
import { mainFeaturedPost, featuredPosts } from '../../mockData/featuredPosts';
import Footer from './Footer';
import MainPosts from './MainPosts';
import post1 from '../../posts/post1';
import post2 from '../../posts/post2';
import MainMainPhoto from '../../images/MainMainPhoto.jpeg';
import MainPhotoUntagged from '../../images/MainPhotoUntagged.jpeg';

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
    height: '800px'
  }
}));

function Home() {

  const classes = useStyles();
  const sections = [
    { title: 'Mixes', url: 'mixes' },
    { title: 'Music', url: 'music' },
    { title: 'Stories', url: 'stories' },
    { title: 'About me!', url: 'aboutme' },
  ];

  const posts = [post1, post2];

  return (
    <>
      <Paper
        style={{ backgroundImage: `url(${MainPhotoUntagged}` }}
        className={classes.mainBackgroundPhoto}
      >
        <Container maxWidth="fixed" className={classes.imageContainer}>
            <Header title="french flavour." sections={sections} />
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
          <MainPosts title="Stories" posts={posts} />
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
