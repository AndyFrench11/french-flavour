import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Card, CardMedia } from '@material-ui/core';
import BlogPost from '../Home/BlogPost';

const styles = theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
});

class VideoMixPosts extends React.Component {

  render() {
    const { classes, posts, title } = this.props;

    return (
      <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post, index) => (
          <>
            <Divider />
            <Grid container alignItems="center" spacing={5}>
              <Grid item md={5} sm={12} xs={12}>
                <iframe 
                    height="300" 
                    width="100%"
                    src="https://www.youtube.com/embed/efsZ4pq_WIg" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                        
                </iframe>
              </Grid>
              <Grid item md={7} sm={12} xs={12}>
                <BlogPost className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </BlogPost>
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
    );
  }
}

VideoMixPosts.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(VideoMixPosts);