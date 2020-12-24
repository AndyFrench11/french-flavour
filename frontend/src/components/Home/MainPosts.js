import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import BlogPost from './BlogPost';

const styles = theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
});

class MainPosts extends React.Component {

  render() {
    const { classes, posts, title } = this.props;

    return (
      <Grid item xs={12} md={12}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post) => (
          <>
            <Divider />
            <BlogPost className={classes.markdown} key={post.substring(0, 40)}>
              {post}
            </BlogPost>
          </>
        ))}
      </Grid>
    );
  }
}

MainPosts.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(MainPosts);