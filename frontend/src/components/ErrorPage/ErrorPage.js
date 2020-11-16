import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Toolbar, Typography, Divider } from '@material-ui/core';
import Footer from '../Home/Footer';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        width: '50%',
        margin: '0 auto'
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    imageContainer: {
        height: '800px'
    }
}));

function ErrorPage() {

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="fixed">
                <Toolbar className={classes.toolbar} >
                    <Typography component="h2"
                        variant="h4"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle} >
                        french flavour.
                    </Typography>
                </Toolbar >
                <Divider />
            </Container>
            <Container maxWidth="lg">
            </Container>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )
}

export default ErrorPage;
