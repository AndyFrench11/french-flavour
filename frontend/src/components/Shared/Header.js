import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    Toolbar,
    Typography,
    Divider
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
    unorderedList: {
        display: 'inline',
        textAlign: 'center',
        paddingInlineStart: '0px',
        "&:hover ~ hr": {
            marginLeft: '0%'
        }
    },
    twoComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '20%'
        }
    },
    threeComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '40%'
        }
    },
    fourComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '60%'
        }
    },
    fiveComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '80%'
        }
    },
    aComponent: {
        display: 'inline-block',
        width: '20%',
        padding: '.75rem 0',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '16px'
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
                {/* TODO Make use of the sections properly. */}
                <div className={classes.toolbarSecondary} >
                    <ul className={classes.unorderedList}>
                        <li className={classes.unorderedList}><a className={classes.aComponent} href="mixes">Mixes</a></li>
                        <li className={classes.twoComponent}><a className={classes.aComponent} href="stories">Stories</a></li>
                        <li className={classes.threeComponent}><a className={classes.aComponent} href="/">Home</a></li>
                        <li className={classes.fourComponent}><a className={classes.aComponent} href="photography">Photography</a></li>
                        <li className={classes.fiveComponent}><a className={classes.aComponent} href="music">Music</a></li>
                        <hr className={classes.hrComponent} />
                    </ul>
                    {/* {sections.map((section) => (
                    <Link color="inherit"
                        noWrap key={section.title}
                        variant="h6"
                        href={section.url}
                        className={classes.toolbarLink}
                        underline='none' >
                        { section.title}
                    </Link>
                ))
                } */}
                </div>
            </React.Fragment >
        )
    }
}

// Determine the property types
Header.propTypes = {
    // sections: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         title: PropTypes.string.isRequired,
    //         url: PropTypes.string.isRequired,
    //     }),
    // ).isRequired,
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);