import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Grid, Typography, Paper, Divider} from '@material-ui/core';
import OrientalBayPhoto from '../../images/OrientalBay.png'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainHeader: {
    fontFamily: 'Open Sans'
  }
}));

function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  // TODO Make this into a carousel of latest content

  return (
    
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${OrientalBayPhoto}` }}
      elevation={20}
    >

      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
            >
              {post.title}
            </Typography>
            <Divider/>
            <Typography variant="h5" color="inherit" paragraph className={classes.mainHeader}>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#" color="inherit" className={classes.mainHeader}>
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
