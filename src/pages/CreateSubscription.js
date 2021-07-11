import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Form from '../components/SubscriptionFormComp/Form'
import NavbarLogo from '../components/NavbarComp/NavbarLogo';

function CreateSubscription() {
    return (
        <>
            <ScrollToTop />
            <NavbarLogo />
            <Form />
        </>
    )
}

export default CreateSubscription
