import * as React from 'react';
import { Container } from '@material-ui/core';
import offender from '../../audio/Offender.mp3';
import WaveSurfer from 'wavesurfer.js';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';


class WaveformPlayerV2 extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: null
        }
    }

    createWaveform = () => {
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'white',
            progressColor: '#38b6ff'
        });
    
        wavesurfer.load(offender);

        this.setState({ wavesurfer: wavesurfer })
    
    }

    playSong = () => {
        const { wavesurfer } = this.state;
        wavesurfer.play()
    }

    pauseSong = () => {
        const { wavesurfer } = this.state;
        wavesurfer.pause()
    }

    render() {
        return (
            <>
                <div id='waveform'>
                </div>
                <IconButton variant="outlined" component="span" onClick={this.playSong}>
                    <PlayCircleOutlineIcon />
                </IconButton>
                <IconButton variant="outlined" component="span" onClick={this.pauseSong}>
                    <PauseCircleOutlineIcon />
                </IconButton>
                {this.state.wavesurfer ? null: <button onClick={this.createWaveform}>Display Waveform</button>}
                
            </>
        )

    }

}

export default WaveformPlayerV2;