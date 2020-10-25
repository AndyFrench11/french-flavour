import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    Toolbar,
    Typography,
    Link,
    Divider
} from '@material-ui/core';

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
    unorderedList: {
        display: 'inline',
        textAlign: 'center',
        paddingInlineStart: '0px'
    },
    twoComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '25%'
        }
    },
    threeComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '50%'
        }
    },
    fourComponent: {
        display: 'inline',
        textAlign: 'center',
        "&:hover ~ hr": {
            marginLeft: '75%'
        }
    },
    aComponent: {
        display: 'inline-block',
        width: '25%',
        padding: '.75rem 0',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '16px'
    },
    hrComponent: {
        height: '.1rem',
        width: '25%',
        margin: '0',
        background: 'white',
        border: 'none',
        transition: '.3s ease-in-out'
    }

}));

function Header(props) {

    const classes = useStyles()
    const { title, sections } = props;

    return (
        <React.Fragment >
            <Toolbar className={classes.toolbar} >
                <Typography component="h2"
                    variant="h4"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle} >
                    {title}
                </Typography>
            </Toolbar >
            <Divider />
            <div className={classes.toolbarSecondary} >
                <ul className={classes.unorderedList}>
                    <li className={classes.unorderedList}><a className={classes.aComponent} href="mixes">Mixes</a></li>
                    <li className={classes.twoComponent}><a className={classes.aComponent} href="mixes">Music</a></li>
                    <li className={classes.threeComponent}><a className={classes.aComponent} href="stories">Stories</a></li>
                    <li className={classes.fourComponent}><a className={classes.aComponent} href="aboutme">About me!</a></li>
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
};

// Determine the property types
Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;