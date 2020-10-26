import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import Markdown from 'markdown-to-jsx';

const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
    bodystuff: {
        fontFamily: 'Open Sans'
    }
});

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h4',
            },
        },
        h2: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h6' },
        },
        h3: {
            component: Typography,
            props: { gutterBottom: true, variant: 'subtitle1' },
        },
        h4: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'caption',
                paragraph: true,
            },
        },
        p: {
            component: Typography,
            props: { paragraph: true },
        },
        a: { component: Link },
        li: {
            component: withStyles(styles)((props) => {
                const { classes, ...other } = props;
                return (
                    <li className={classes.listItem}>
                        <Typography component="span" {...other} className={classes.bodystuff}/>
                    </li>
                );
            }),
        },
    },
};

export default function BlogPost(props) {
return <Markdown options={options} {...props} />;
}