import * as React from 'react';
import { Paper, Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import offender from '../../mockData/audio/Offender.mp3';
import WaveSurfer from 'wavesurfer.js';
import CursorPlugin from "wavesurfer.js/dist/plugin/wavesurfer.cursor.min";
import IconButton from '@material-ui/core/IconButton';
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleIcon from '@material-ui/icons/PauseCircleFilled';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    mainContainer: {
        position: 'relative',
        padding: theme.spacing(1),
    },
})

class WaveformPlayer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: null,
            isPlaying: false,
            isLoading: true
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
    
        wavesurfer.load(offender);

        this.setState({ wavesurfer: wavesurfer, isLoading: false })
    
    }

    resumeSongOnSeek = () => {
        const { wavesurfer, isPlaying } = this.state;
        if(isPlaying) {
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

    render() {
        const { isPlaying, isLoading } = this.state;
        const { classes } = this.props;
        return (
            <>
                <Paper>
                    <Grid container className={classes.mainContainer}>
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
                        <Grid item xs={11}>
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Offender
                                </Typography>
                            </Grid>
                            <Divider/>
                            <Grid item>
                                <Typography variant="h6" gutterBottom>
                                    Dimension
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.mainContainer}>
                        <Grid item xs={12}>
                            <div id='waveform'>
                                {
                                    isLoading ? 
                                        <CircularProgress color="#38b6ff"></CircularProgress>
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

export default withStyles(styles)(WaveformPlayer);