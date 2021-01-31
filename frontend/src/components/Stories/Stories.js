import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Divider, Typography } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import post1 from '../../mockData/posts/NovemberPost1';
import post2 from '../../mockData/posts/NovemberPost2';
import post3 from '../../mockData/posts/NovemberPost3';
import post4 from '../../mockData/posts/NovemberPost4';
import post5 from '../../mockData/posts/NovemberPost5';
import post6 from '../../mockData/posts/NovemberPost6';
import post7 from '../../mockData/posts/NovemberPost7';
import MainPosts from '../Home/MainPosts';
import PropTypes from 'prop-types';
import birdcagePhoto from '../../mockData/images/birdcagePhoto.jpeg';

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
    },
});

class Stories extends React.Component {

    render() {

        const { classes } = this.props;
        const posts = [post1, post2, post3, post4, post5, post6, post7];
        posts.reverse()

        return (
            <>
                <Paper
                    style={{ backgroundImage: `url(${birdcagePhoto}` }}
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
                                        What's happening around these parts you say? Fun fun fun things I tell ya!
                                    </Typography>
                                    <Divider />
                                    <br />
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Check it out below! 
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
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
}

Stories.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stories);