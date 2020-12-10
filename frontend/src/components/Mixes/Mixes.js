import * as React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import WaveformPlayerV2 from './WaveformPlayerV2';

function Mixes() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>
            <Container maxWidth="lg">
                <WaveformPlayerV2 />
            </Container>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )

}

export default Mixes;