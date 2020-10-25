import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core'; 
import Header from './Header';
import LargeFeaturedPost from './LargeFeaturedPost';
import SmallFeaturedPost from './SmallFeaturedPost';
import { mainFeaturedPost, featuredPosts } from '../../mockData/featuredPosts';



class Home extends React.Component {

    useStyles() {
        return makeStyles((theme) => ({
            mainGrid: {
            marginTop: theme.spacing(3),
            },
        }));
    }

    sections = [
        { title: 'Mixes', url: 'mixes' },
        { title: 'Music', url: 'mixes' },
        { title: 'Stories', url: 'stories' },
        { title: 'About me!', url: 'aboutme' },
      ];

    

    render() {
        const classes = this.useStyles();

        return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="French Flavour." sections={this.sections} />
              <main>
                <LargeFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                  {featuredPosts.map((post) => (
                    <SmallFeaturedPost key={post.title} post={post} />
                  ))}
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                  {/* <Main title="From the firehose" posts={posts} /> */}
                  {/* <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                  /> */}
                </Grid>
              </main>
            </Container>
            {/* <Footer
              title="Footer"
              description="Something here to give the footer a purpose!"
            /> */}
          </React.Fragment>
        )
    }

}

export default Home;
