import * as React from 'react';
import LineDrawer from './LineDrawer/LineDrawer';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function Music() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>
            <LineDrawer />
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )

}

export default Music;