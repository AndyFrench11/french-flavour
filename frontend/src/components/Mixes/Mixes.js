import * as React from 'react'; 
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import FooterMediaPlayer from '../Shared/FooterMediaPlayer';
import WaveformPlayer from './WaveformPlayer';
import { Container, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(6)
    },
});

class Mixes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stillUnderwork: false
        }
    }

    render() {

        const { classes } = this.props;
        const { stillUnderwork } = this.state;

        return (
            <>
                <Container maxWidth="fixed">
                    <Header title="french flavour." />
                </Container>
                <Container maxWidth="lg" className={classes.mainContainer}>
                    {
                        stillUnderwork ? 
                            <>
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                    align="center"
                                >
                                    This page is still underway.
                                </Typography>
                                    <Divider />
                                    <br />
                                    <Typography variant="h5" color="inherit" paragraph align="center">
                                        But don't stray away! Exciting things are on the horizon!
                                </Typography>
                            </>
                        :
                            <WaveformPlayer />
                    }
                </Container>
            
                <Footer
                    title="Thanks for coming!"
                    description="Hope you enjoyed it!"
                    isSticky={true}
                /> 
                
            </>
        )

    }
}

Mixes.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Mixes);