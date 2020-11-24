import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

function ErrorPage() {

    return (
        <>
            <Container maxWidth="fixed">
                <Header title="french flavour."/>
            </Container>
            <Footer
                title="Thanks for coming!"
                description="Hope you enjoyed it!"
            />
        </>
    )
}

export default ErrorPage;
