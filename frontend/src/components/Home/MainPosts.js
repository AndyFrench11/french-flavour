import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Card, CardMedia } from '@material-ui/core';
import BlogPost from './BlogPost';
import Carousel from 'react-material-ui-carousel';
import './mainPostsStyle.scss';

const styles = theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  carousel: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)

  }
});

const items = [
  {
    Name: "Macbook Pro",
    Image: "https://source.unsplash.com/featured/?macbook"
},
{
    Name: "iPhone",
    Image: "https://source.unsplash.com/featured/?iphone"
}
]

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
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs={7}>
                <BlogPost className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </BlogPost>
              </Grid>
              <Grid item xs={5}>
                <Carousel
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                  activeIndicatorProps={{ style: { 'color': '#38b6ff' } }}
                  className={classes.carousel}
                >
                  {
                    items.map((item, i) =>
                      <Card raised className="Banner">
                        <CardMedia
                          className="Media"
                          image={item.Image}
                        >
                        </CardMedia>
                      </Card>
                    )
                  }
                </Carousel>
              </Grid>

            </Grid>
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