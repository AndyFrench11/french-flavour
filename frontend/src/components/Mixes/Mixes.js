import * as React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import WaveformPlayer from './WaveformPlayer';
import { Container, Typography, Divider, Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import bluewaterMix2 from '../../mockData/images/bluewaterMix2.jpeg';

const styles = theme => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(6)
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

class Mixes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { classes } = this.props;

        return (
            <>
                <Paper
                    style={{ backgroundImage: `url(${bluewaterMix2}` }}
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
                                        Want to hear the sound of the flavour? House, Disco and even Drum and Bass!
                                    </Typography>
                                    <Divider />
                                    <br />
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Look no further! Come down below!
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <Container maxWidth="lg" className={classes.mainContainer}>
                    <Typography variant="h6" gutterBottom>
                        Radio Shows
                    </Typography>
                    <Divider />
                    <br />
                    <WaveformPlayer />
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