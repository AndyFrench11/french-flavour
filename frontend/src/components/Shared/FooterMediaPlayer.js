import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleIcon from '@material-ui/icons/PauseCircleFilled';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { connect } from 'react-redux';
import moment from 'moment';
import { togglePlaying } from '../../actions/footerMediaPlayer';

const styles = theme => ({
  stickyFooter: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0),
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
  },
  latoFont: {
    fontFamily: 'Lato'
  },
  volumeSlider: {
    color: '#38b6ff'
  }

});

class FooterMediaPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      volumeValue: 30
    }
  }

  componentDidMount() {

  }

  handleSongSeek = (event, newValue) => {
    // Update wavesurfer with seek information
    const { seekSong } = this.props;
    seekSong(newValue / 100)
  }

  toggleIsPlaying = () => {
    // Play the song
    const { isPlaying, toggleSongPlaying } = this.props;
    this.props.dispatch(togglePlaying(!isPlaying))
    toggleSongPlaying()
  }

  handleVolumeChange = (event, newValue) => {
    const { setVolume } = this.props;
    setVolume(newValue);
    this.setState({volumeValue: newValue});

  };

  render() {

    const { classes, footerMedia, isPlaying } = this.props;
    const { volumeValue } = this.state;

    const progressValue = (footerMedia.currentTimeValue / footerMedia.songDuration) * 100
    const roundedProgressValue = Math.round(progressValue * 100) / 100

    const timeElapsed = moment.utc(footerMedia.currentTimeValue * 1000).format('mm:ss')
    const timeRemaining = moment.utc((footerMedia.songDuration - footerMedia.currentTimeValue)*1000).format('mm:ss')

    return (
      <footer className={classes.stickyFooter}>
        <Container maxWidth="lg" className={classes.footerContainer}>

          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h6" align="center" gutterBottom>
                  {'Dark and Smooth Drum & Bass · ActiveFM 88.6 - Midnight Marauders Show'}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Grid container justify="center">
                  {
                    isPlaying ?
                      <IconButton size="medium" component="span" onClick={this.toggleIsPlaying}>
                        <PauseCircleIcon style={{ fontSize: 50 }} />
                      </IconButton>
                      :
                      <IconButton size="medium" component="span" onClick={this.toggleIsPlaying}>
                        <PlayCircleIcon style={{ fontSize: 50 }} />
                      </IconButton>
                  }
                </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.latoFont}
              >
                {timeElapsed}
                  </Typography>

            </Grid>
            <Grid item xs={6}>
              <Grid container alignItems="center">
                  <Grid item xs={12}>
                    <Slider
                        className={classes.volumeSlider}
                        value={roundedProgressValue}
                        onChange={this.handleSongSeek}
                    />
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.latoFont}
              >
                - {timeRemaining}
                  </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider value={volumeValue} onChange={this.handleVolumeChange} aria-labelledby="continuous-slider" className={classes.volumeSlider} />
                </Grid>
                <Grid item>
                  <VolumeUp />
                </Grid>
              </Grid>
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

export default withStyles(styles)(connect(state => ({
  footerMedia: state.footerMediaPlayer.footerMedia,
  isPlaying: state.footerMediaPlayer.isPlaying,
  setVolume: state.footerMediaPlayer.setVolume,
  toggleSongPlaying: state.footerMediaPlayer.toggleSongPlaying,
  seekSong: state.footerMediaPlayer.seekSong
}))(FooterMediaPlayer));
