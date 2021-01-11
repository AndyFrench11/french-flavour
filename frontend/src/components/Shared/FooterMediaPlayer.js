import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, CircularProgress } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleIcon from '@material-ui/icons/PauseCircleFilled';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import offender from '../../mockData/audio/Offender.mp3';
import WaveSurfer from 'wavesurfer.js';
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.min";

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
      wavesurfer: null,
      isPlaying: false,
      isLoading: true,
      volumeValue: 30
    }
  }

  componentDidMount() {
    setTimeout(this.createWaveform, 3000);
  }

  createWaveform = () => {

    var wavesurfer = WaveSurfer.create({
      container: document.querySelector('#footerWaveform'),
      waveColor: '#ffffff',
      progressColor: '#38b6ff',
      barWidth: 3,
      barRadius: 3,
      height: 50,
      barGap: 3,
      cursorColor: '#38b6ff',
      plugins: [
        CursorPlugin.create({
          showTime: true,
          opacity: 1,
          color: '#38b6ff',
          customShowTimeStyle: {
            'background-color': '#000',
            color: '#fff',
            padding: '2px',
            'font-size': '12px',
            'font-family': 'Lato'
          }
        })
      ]

    });

    wavesurfer.on('seek', () => {
      this.resumeSongOnSeek()
    })

    wavesurfer.load(offender);

    this.setState({ wavesurfer: wavesurfer, isLoading: false })

  }

  resumeSongOnSeek = () => {
    const { wavesurfer, isPlaying } = this.state;
    if (isPlaying) {
      wavesurfer.play()
    }
  }

  playSong = () => {
    const { wavesurfer, isPlaying } = this.state;
    wavesurfer.play()
    this.setState({ isPlaying: !isPlaying });
  }

  pauseSong = () => {
    const { wavesurfer, isPlaying } = this.state;
    wavesurfer.pause()
    this.setState({ isPlaying: !isPlaying });
  }


  handleChange = (event, newValue) => {
    const { wavesurfer } = this.state;
    wavesurfer.setVolume(newValue / 100);
    this.setState({ volumeValue: newValue });
  };

  render() {

    const { classes } = this.props;
    const { isPlaying, volumeValue, isLoading } = this.state;


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
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Grid container justify="center">
                  {
                    isPlaying ?
                      <IconButton size="large" component="span" onClick={this.pauseSong}>
                        <PauseCircleIcon style={{ fontSize: 50 }} />
                      </IconButton>
                      :
                      <IconButton size="large" component="span" onClick={this.playSong}>
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
                1.06
                  </Typography>

            </Grid>
            <Grid item xs={6}>
              <Grid container alignItems="center">
                  <Grid item xs={12}>
                      <div id='footerWaveform'>
                          {
                              isLoading ? 
                                  <CircularProgress color="#38b6ff"></CircularProgress>
                              :
                                  null
                          }
                      </div>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.latoFont}
              >
                - 2.03
                  </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container spacing={2}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider value={volumeValue} onChange={this.handleChange} aria-labelledby="continuous-slider" className={classes.volumeSlider} />
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

export default withStyles(styles)(FooterMediaPlayer);
