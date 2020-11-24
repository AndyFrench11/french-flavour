import * as React from 'react';
import { Container } from '@material-ui/core';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

function Photography() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>

            <h1>Photos time yo!</h1>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )

}

export default Photography;