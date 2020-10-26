import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import Header from './Header';
import LargeFeaturedPost from './LargeFeaturedPost';
import SmallFeaturedPost from './SmallFeaturedPost';
import { mainFeaturedPost, featuredPosts } from '../../mockData/featuredPosts';
import Footer from './Footer';
import MainPosts from './MainPosts';
import post1 from '../../posts/post1';
import post2 from '../../posts/post2';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function Home() {

  const classes = useStyles();
  const sections = [
    { title: 'Mixes', url: 'mixes' },
    { title: 'Music', url: 'mixes' },
    { title: 'Stories', url: 'stories' },
    { title: 'About me!', url: 'aboutme' },
  ];

  const posts = [post1, post2];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="french flavour." sections={sections} />
        <main>
          <LargeFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <SmallFeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <MainPosts title="Updates" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Thanks for coming!"
        description="Hope you enjoyed it!"
      />
    </React.Fragment>
  )
}

export default Home;
