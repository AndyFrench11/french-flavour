import * as React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function Stories() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>
            <h2>Stories baby!</h2>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )

}

export default Stories;