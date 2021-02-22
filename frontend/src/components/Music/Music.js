import * as React from 'react';
import { Container, Typography, Divider } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(6)
    },
});

class Music extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <>
                <Container maxWidth="lg">
                    <Header title="french flavour." />
                </Container>
                <Container maxWidth="lg" className={classes.mainContainer}>
                    <Typography
                        component="h3"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        align="center"
                    >
                        This page is coming soon!
                </Typography>
                    <Divider />
                    <br />
                    <Typography variant="h5" color="inherit" paragraph align="center">
                        But don't stray away! There's still LOTS of fun to be had here.
                </Typography>
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

Music.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Music);