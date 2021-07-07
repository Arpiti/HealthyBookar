import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/NavbarComp/Navbar';
import Form from '../components/SubscriptionFormComp/Form'

import LinearStepper from "../components/LinearStepperFormComp/LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import NavbarLogo from '../components/NavbarComp/NavbarLogo';

function CreateSubscription() {
    return (
        <>
            <scrollToTop />
            <NavbarLogo />
            <Form />
            {/* <CssBaseline />
            <Container component={Box} p={4}>
                <Paper component={Box} p={3}>
                    <LinearStepper />
                </Paper>
            </Container> */}
        </>
    )
}

export default CreateSubscription
