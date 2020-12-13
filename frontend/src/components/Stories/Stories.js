import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import post1 from '../../posts/NovemberPost1';
import post2 from '../../posts/NovemberPost2';
import post3 from '../../posts/NovemberPost3';
import post4 from '../../posts/NovemberPost4';
import post5 from '../../posts/NovemberPost5';
import post6 from '../../posts/NovemberPost6';
import post7 from '../../posts/NovemberPost7';
import MainPosts from '../Home/MainPosts';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

function Stories() {

    const classes = useStyles();
    const posts = [post1, post2, post3, post4, post5, post6, post7];
    posts.reverse()

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour." />
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={5} className={classes.mainGrid}>
                    <MainPosts title="Recent Updates" posts={posts} />
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

export default Stories;