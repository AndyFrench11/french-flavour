import * as React from 'react';
import WaveformPlayer from './WaveformPlayer/WaveformPlayer';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function Mixes() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>
            <Container maxWidth="lg">
                <WaveformPlayer />
            </Container>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )

}

export default Mixes;