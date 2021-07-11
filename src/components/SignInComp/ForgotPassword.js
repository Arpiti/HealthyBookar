import React, { useState } from 'react'
import { auth } from '../../firebase/config';

import { useHistory } from 'react-router';
import { Container, Form, FormButtonSubmit, FormContent, FormH1, FormInout, FormLabel, FormWrap, Icon, Text, FormButtonFacebookSignIn, FormButtonGoogleSignIn, FormButtonSignUp } from './SignInElements'
import RedirectDialogBox from './RedirectDialogBox';


const SignIn = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [showRedirectPage, setShowRedirectPage] = useState(false);


    const passwordReset = e => {
        e.preventDefault();

        console.log('in password reset for', email);
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                setShowRedirectPage(true);
                setTimeout(() => {
                    history.push('/SignIn');
                }, 5000);

            })
            .catch((error) => {
                //var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }

    return (
        <>
            {showRedirectPage ?
                <RedirectDialogBox redirectHeading={'Password reset mail sent successfully'} pageName={'SignIn Page'} redirectTimeout={'8'} />
                :
                <Container>
                    <FormWrap>
                        <FormContent>
                            <Form action="#">
                                <Icon to="/">Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</Icon>
                                <FormH1>Sign in to your account</FormH1>
                                <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInout type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                                <FormButtonSubmit type="submit" onClick={passwordReset}>Send Password Reset link</FormButtonSubmit>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>}


        </>
    )
}

export default SignIn
