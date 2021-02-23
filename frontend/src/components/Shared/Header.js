import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    Toolbar,
    Typography,
    Divider,
    Link,
    Grid
} from '@material-ui/core';

const calculateHrMarginLeft = () => {
    let url = window.location.href
    var n = url.lastIndexOf("/");
    let page = url.substring(n + 1);

    switch (page) {
        case 'mixes':
            return '0%'
        case 'stories':
            return '20%'
        case '':
            return '40%'
        case 'photography':
            return '60%'
        case 'music':
            return '80%'
        default:
            return '40%'
    }
}

const styles = theme => ({
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
    linkComponent: {
        display: 'inline-block',
        padding: '.75rem 0',
        fontSize: '16px',
        "&:hover ~ hr": {
            marginLeft: '20%'
        }

    },
    gridComponent: {
        'text-align': 'center',
    },
    hrComponent: {
        height: '.1rem',
        marginLeft: calculateHrMarginLeft(),
        width: '20%',
        margin: '0',
        background: 'white',
        border: 'none',
        transition: '.3s ease-in-out'
    }
    

});

class Header extends React.Component {

    renderDesktopHeader = () => {
        const { classes } = this.props;

        return (
            <>
                <Grid container justify="center" alighnItems="center" spacing={5}>
                    <Grid item xs={2} lg={2} className={classes.gridComponent}>
                        <Link color="inherit" noWrap underline='none' className={classes.linkComponent} href='mixes'>
                            Mixes
                        </Link>
                    </Grid>
                    <Grid item xs={2} lg={2} className={classes.gridComponent}>
                        <Link color="inherit" noWrap underline='none' className={classes.linkComponent} href='stories'>
                            Stories
                        </Link>
                    </Grid>
                    <Grid item xs={2} lg={2} className={classes.gridComponent}>
                        <Link color="inherit" noWrap underline='none' className={classes.linkComponent} href='/'>
                            Home
                        </Link>
                    </Grid>
                    <Grid item xs={2} lg={2} className={classes.gridComponent}>
                        <Link color="inherit" noWrap underline='none' className={classes.linkComponent} href='photography'>
                            Photos
                        </Link>
                    </Grid>
                    <Grid item xs={2} lg={2} className={classes.gridComponent}>
                        <Link color="inherit" noWrap underline='none' className={classes.linkComponent} href='music'>
                            Music
                        </Link>
                    </Grid>
                </Grid>
                <hr className={classes.hrComponent}/>
            </>
        )
    }

    render() {

        const { classes, title } = this.props;

        return (
            <React.Fragment >
                <Toolbar className={classes.toolbar} >
                    <Typography
                        component="h2"
                        variant="h4"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {title}
                    </Typography>
                </Toolbar >
                <Divider />
                {this.renderDesktopHeader()}
                
            </React.Fragment >
        )
    }
}

// Determine the property types
Header.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);