import * as React from 'react';
import { Container, Typography, Divider, Paper } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import loveNotLost from '../../mockData/posts/post_1/images/lovenotlost.jpeg';

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
        backgroundPosition: 'top',
    },
    imageContainer: {
        height: '600px'
    },
    shadowClass : {
        'text-shadow': '3px 3px #787878'
    }
});

class Photography extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <>
                <Paper
                    style={{ backgroundImage: `url(${loveNotLost}` }}
                    className={classes.mainBackgroundPhoto}
                >
                    <Container maxWidth="lg" className={classes.imageContainer}>
                        <Header title="french flavour." />
                    </Container>

                    <Container maxWidth="lg" className={classes.mainContainer}>
                    <Typography
                        component="h3"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        align="center"
                        className={classes.shadowClass}
                    >
                        This page is coming soon!
                </Typography>
                    <Divider />
                    <br />
                    <Typography variant="h5" color="inherit" paragraph align="center" className={classes.shadowClass}>
                        But don't stray away! There's still LOTS of fun to be had here.
                </Typography>
                </Container>
                </Paper>
                <Footer
                    title="Thanks for coming!"
                    description="Hope you enjoyed it!"
                    isSticky={false}
                />
            </>
        )
    }

}

Photography.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Photography);
