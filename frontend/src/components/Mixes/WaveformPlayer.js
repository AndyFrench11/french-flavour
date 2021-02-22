import * as React from 'react';
import { Paper, Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import ActiveFMSet from '../../mockData/audio/ActiveFMSet.mp3';
import WaveSurfer from 'wavesurfer.js';
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.min";
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleIcon from '@material-ui/icons/PauseCircleFilled';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { updateCurrentFooterMedia, showFooterMediaPlayer, togglePlaying, generateWaveformHelperFunctions } from '../../actions/footerMediaPlayer';
import { connect } from 'react-redux';

const styles = theme => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(1),
    },
    showName: {
        marginTop: '5px'
    },
})

class WaveformPlayer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        setTimeout(this.createWaveform, 3000);
    }

    createWaveform = () => {

        var wavesurfer = WaveSurfer.create({
            container: document.querySelector('#waveform'),
            waveColor: '#ffffff',
            progressColor: '#38b6ff',
            barWidth: 3,
            barRadius: 3,
            height: 200,
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

        wavesurfer.on('audioprocess', () => {
            this.props.dispatch(updateCurrentFooterMedia(wavesurfer.getCurrentTime(), wavesurfer.getDuration()))
        })

        wavesurfer.on('ready', () => {
            this.setState({ isLoading: false  })
        })
        
        // Load the given mix/song from the input
        wavesurfer.load(ActiveFMSet);

        this.setState({ wavesurfer: wavesurfer })

        // Send functions to state
        this.props.dispatch(generateWaveformHelperFunctions(this.setVolume, this.toggleSongPlaying, this.seekThroughSong))
    
    }

    seekThroughSong = (progress) => {
        const { wavesurfer } = this.state;
        wavesurfer.seekTo(progress);
    }

    setVolume = (value) => {
        const { wavesurfer } = this.state;
        wavesurfer.setVolume(value / 100);
    }

    resumeSongOnSeek = () => {
        const { wavesurfer } = this.state;
        const { isPlaying } = this.props;

        if(isPlaying) {
            wavesurfer.play()
        }
    }

    toggleSongPlaying = () => {
        const { wavesurfer } = this.state;
        const { isPlaying } = this.props;

        if(isPlaying) {
            wavesurfer.pause()
        } else {
            wavesurfer.play()
        }

    }

    playSong = () => {
        const { wavesurfer } = this.state;
        const { isPlaying } = this.props;

        console.log(isPlaying)

        wavesurfer.play()
        this.props.dispatch(updateCurrentFooterMedia(wavesurfer.getCurrentTime(), wavesurfer.getDuration()))
        this.props.dispatch(togglePlaying(!isPlaying))
        this.props.dispatch(showFooterMediaPlayer())
    }

    pauseSong = () => {
        const { wavesurfer } = this.state;
        const { isPlaying } = this.props;

        wavesurfer.pause()

        this.props.dispatch(togglePlaying(!isPlaying))
    }

    render() {
        const { isLoading } = this.state;
        const { classes, isPlaying } = this.props;
        return (
            <>
                <Paper>
                    <Grid container className={classes.mainContainer}>
                        <Grid item xs={1}>
                            {
                                isPlaying ? 
                                    <IconButton size="medium" component="span" onClick={this.pauseSong}>
                                        <PauseCircleIcon style={{ fontSize: 50 }}/>
                                    </IconButton>
                                :
                                    <IconButton size="medium" component="span" onClick={this.playSong}>
                                        <PlayCircleIcon style={{ fontSize: 50 }}/>
                                    </IconButton>
                            }
                        </Grid>
                        <Grid item xs={11}>
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    {'Dark and Smooth Drum & Bass'}
                                </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item>
                                <Typography variant="h6" gutterBottom className={classes.showName}>
                                    {'ActiveFM 88.6 - Midnight Marauders Show'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                        <Grid item xs={12}>
                            <div id='waveform'>
                                {
                                    isLoading ? 
                                        <CircularProgress color="inherit"/>
                                    :
                                        null
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                
            </>
        )

    }

}

WaveformPlayer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(connect(state => ({
    footerMedia: state.footerMediaPlayer.footerMedia,
    isPlaying: state.footerMediaPlayer.isPlaying
  }))((WaveformPlayer)));