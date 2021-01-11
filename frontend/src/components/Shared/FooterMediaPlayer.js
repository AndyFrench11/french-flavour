import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleIcon from '@material-ui/icons/PauseCircleFilled';

const styles = theme => ({
  stickyFooter: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  },
  nonStickyFooter: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
  openSansFont: {
    fontFamily: 'Lato'
  }

});

class FooterMediaPlayer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: null,
            isPlaying: false,
            isLoading: true
        }
    }

    playSong = () => {
        const { wavesurfer, isPlaying } = this.state;
        // wavesurfer.play()
        this.setState({ isPlaying: !isPlaying });
    }

    pauseSong = () => {
        const { wavesurfer, isPlaying } = this.state;
        // wavesurfer.pause()
        this.setState({ isPlaying: !isPlaying });
    }

  render() {

    const { classes } = this.props;
    const { isPlaying } = this.state;

    //Plan:
    // Create a grid which contains the name of the song and the artist at the top
    // Below that (next row) Have a play pause button, 
    // then a slider which shows u how far thru the song u are (with time elapsed and time remaining on the left and right)
    // and then a volume slider on the right of that

    return (
      <footer className={classes.stickyFooter}>
        <Container maxWidth="lg" className={classes.footerContainer}>
            
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                        Dimension - Offender
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    {
                        isPlaying ? 
                            <IconButton size="large" component="span" onClick={this.pauseSong}>
                                <PauseCircleIcon style={{ fontSize: 50 }}/>
                            </IconButton>
                        :
                            <IconButton size="large" component="span" onClick={this.playSong}>
                                <PlayCircleIcon style={{ fontSize: 50 }}/>
                            </IconButton>
                    }
                </Grid>
                <Grid item xs={1}>
                    1.06
                </Grid>
                <Grid item xs={8}>
                    INSERT SLIDER
                </Grid>
                <Grid item xs={1}>
                    - 2.03
                </Grid>
                <Grid item xs={1}>
                    INSERT VOLUME SLIDER
                </Grid>

            </Grid>

        </Container>
      </footer>
    );
  }
}

FooterMediaPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterMediaPlayer);
