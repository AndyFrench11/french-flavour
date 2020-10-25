import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Grid, 
    Card, 
    CardActionArea, 
    CardContent, 
    Typography,  
    Hidden,
    CardMedia
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

function SmallFeaturedPost(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card} elevation={5}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit">
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden smDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageText}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )

}

SmallFeaturedPost.propTypes = {
    post: PropTypes.shape({
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default SmallFeaturedPost;