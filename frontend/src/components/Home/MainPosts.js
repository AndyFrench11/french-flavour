import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Card, CardMedia } from '@material-ui/core';
import BlogPost from './BlogPost';
import Carousel from 'react-material-ui-carousel';
import './mainPostsStyle.scss';
import birdcage from '../../mockData/posts/post_1/images/birdcage.jpeg';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context(`../../mockData/posts/post_1/images`, false, /\.(png|jpe?g|svg)$/));

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

class MainPosts extends React.Component {

  render() {
    const { classes, posts, title } = this.props;
    var photoList = Object.keys(images);

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
              {index % 2 === 0 ?
                <>
                  <Grid item md={7} sm={12}>
                    <BlogPost className={classes.markdown} key={post.substring(0, 40)}>
                      {post}
                    </BlogPost>
                  </Grid>
                  <Grid item md={5} sm={12}>
                    <Carousel
                      autoPlay={false}
                      navButtonsAlwaysVisible={true}
                      activeIndicatorProps={{ style: { 'color': '#38b6ff' } }}
                      className={classes.carousel}
                    >
                      {
                        photoList.map((item, i) =>
                          <Card raised className="Banner">
                            <CardMedia
                              className="Media"
                              image={images[photoList[i]]}
                            >
                            </CardMedia>
                          </Card>
                        )
                      }
                    </Carousel>
                  </Grid>
                </>
                :
                <>
                  <Grid item md={5} sm={12}>
                    <Carousel
                      autoPlay={false}
                      navButtonsAlwaysVisible={true}
                      activeIndicatorProps={{ style: { 'color': '#38b6ff' } }}
                      className={classes.carousel}
                    >
                      {
                        photoList.map((item, i) =>
                          <Card raised className="Banner">
                            <CardMedia
                              className="Media"
                              image={images[photoList[i]]}
                            >
                            </CardMedia>
                          </Card>
                        )
                      }
                    </Carousel>
                  </Grid>
                  <Grid item md={7} sm={12}>
                    <BlogPost className={classes.markdown} key={post.substring(0, 40)}>
                      {post}
                    </BlogPost>
                  </Grid>

                </>
              }

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