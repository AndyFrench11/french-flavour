import * as React from 'react';
import WaveformPlayer from './WaveformPlayer/WaveformPlayer';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import offender from '../../audio/Offender.mp3';
import WaveSurfer from 'wavesurfer.js';


function createWaveform() {
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'white',
        progressColor: '#38b6ff'
    });

    wavesurfer.load(offender);

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

}

function WaveformPlayerV2() {

    return (
        <>
            <div id='waveform'>
                <button onClick={createWaveform}></button>
            </div>
        </>
    )

}

export default WaveformPlayerV2;