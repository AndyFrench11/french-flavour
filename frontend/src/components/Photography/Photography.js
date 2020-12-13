import * as React from 'react';
import { Container, Typography, Divider } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(3),
        paddingTop: theme.spacing(6)
    },
}));

function Photography() {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>

            <Container maxWidth="lg" className={classes.mainContainer}>
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
            </Container>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
                isSticky={true}
            />
        </>
    )

}

export default Photography;