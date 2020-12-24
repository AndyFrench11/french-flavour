import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
    headerFont: {
        fontFamily: 'Libre Baskerville'
    },
    paragraphFont: {
        fontFamily: 'Lato',
    }
});

const options = {
    overrides: {
        h1: {
            component: withStyles(styles)((props) => {
                const { classes, children } = props;
                return (
                    <Typography gutterBottom={true} variant='h4' className={classes.headerFont}> {children[0]} </Typography>
                );
            }),
        },
        h2: {
            component: withStyles(styles)((props) => {
                const { classes, children } = props;
                return (
                    <Typography gutterBottom={true} variant='h6' className={classes.headerFont}> {children[0]} </Typography>
                );
            }),
        },
        h3: {
            component: withStyles(styles)((props) => {
                const { classes, children } = props;
                return (
                    <Typography gutterBottom={true} variant='subtitle1' className={classes.headerFont}> {children[0]} </Typography>
                );
            }),
        },
        h4: {
            component: withStyles(styles)((props) => {
                const { classes, children } = props;
                return (
                    <Typography gutterBottom={true} variant='caption' paragraph={true} className={classes.headerFont}> {children[0]} </Typography>
                );
            }),
        },
        p: 
        {
            component: withStyles(styles)((props) => {
                const { classes, children } = props;
                return (
                    <Typography variant='body2' paragraph={true} className={classes.paragraphFont}> {children} </Typography>
                );
            }),
        },
        a: { component: Link },
        li: {
            component: withStyles(styles)((props) => {
                const { classes, ...other } = props;
                return (
                    <li className={classes.listItem}>
                        <Typography component="span" {...other} />
                    </li>
                );
            }),
        },
    },
};

export default function BlogPost(props) {

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
        },
        typography: {
            fontFamily: 'Lato',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Markdown options={options} {...props} />
        </ThemeProvider>
    );
}