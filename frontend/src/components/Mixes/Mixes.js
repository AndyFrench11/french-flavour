import * as React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import WaveformPlayer from './WaveformPlayer';
import { Container, Typography, Divider, Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import bluewaterMix2 from '../../mockData/images/bluewaterMix2.jpeg';
import VideoMixPosts from './VideoMixPosts';
import post1 from '../../mockData/mixes/bluewaterMix';

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
        },
        'text-shadow': '3px 3px #787878'
    },
});

class Mixes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { classes } = this.props;
        const posts = [post1]

        return (
            <>
                <Paper
                    style={{ backgroundImage: `url(${bluewaterMix2}` }}
                    className={classes.mainBackgroundPhoto}
                >
                    <Container maxWidth="lg" className={classes.imageContainer}>
                        <Header title="french flavour." />
                    </Container>

                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item md={6} sm={12}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Want to hear the sound of the flavour? House, Disco and even Drum and Bass!
                                    </Typography>
                                    <Divider />
                                    <br />
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Well boy do we have a treat for you...
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                {/* <Container maxWidth="lg" className={classes.mainContainer}>
                    <Typography variant="h6" gutterBottom>
                        Radio Shows
                    </Typography>
                    <Divider />
                    <br />
                    <WaveformPlayer />
                </Container> */}
                <Container maxWidth="lg">
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <VideoMixPosts title="Recent Mixes" posts={posts} />
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

Mixes.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Mixes);