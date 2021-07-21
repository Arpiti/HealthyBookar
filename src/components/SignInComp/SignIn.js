import React, { useState } from 'react'
import { auth, fbProvider, googleProvider } from '../../firebase/config';

import { useHistory } from 'react-router';
import { Container, Form, FormButtonSubmit, FormContent, FormH1, FormInout, FormLabel, FormWrap, Icon, Text, FormButtonFacebookSignIn, FormButtonGoogleSignIn, FormButtonSignUp, FormLinkText } from './SignInElements'
import RedirectDialogBox from './RedirectDialogBox';

const SignIn = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleSignIn = e => {
        e.preventDefault();
        setSubmitClicked(true);

        //Firebase Sign In
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth)
                if (auth) {
                    setTimeout(() => {
                        history.push('/');
                    }, 3000);
                }
            })
            .catch(error => alert(error.message))
    }

    const registerWithGoogle = e => {
        e.preventDefault();

        auth
            .signInWithPopup(googleProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                console.log('userinfo >>>> ', user);
                console.log('userinfo >>>> ', user.displayName);
                if (result) {
                    history.push('/');
                }

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const registerWithFacebook = e => {
        e.preventDefault();

        auth
            .signInWithPopup(fbProvider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;

                console.log('fb user >>', user);
                if (result) {
                    history.push('/');
                }

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log('fb user error >>', errorMessage);
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                // ...
            });
    }

    const passwordReset = () => {
        console.log('in password reset for', email);
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('password reset mail sent')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        {submitClicked ? <RedirectDialogBox redirectHeading={"Logging in, please wait..."} pageName={"your account"} redirectTimeout={5} /> : <Form action="#">
                            <Icon to="/">Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</Icon>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInout type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInout type="password" requiredvalue={password} onChange={e => setPassword(e.target.value)} />
                            <FormButtonSubmit type="submit" onClick={handleSignIn}> Submit</FormButtonSubmit>
                            <FormLinkText to='/forgotPassword' onClick={passwordReset}> Forgot password? </FormLinkText>
                            <Text> ----------- OR ----------- </Text>
                            <FormButtonGoogleSignIn onClick={registerWithGoogle} type="submit">Sign in with Google</FormButtonGoogleSignIn>
                            <FormButtonFacebookSignIn onClick={registerWithFacebook} type="submit">Sign in with Facebook</FormButtonFacebookSignIn>
                            <FormButtonSignUp to="/signup">Create new Account</FormButtonSignUp>
                        </Form>}
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    )
}

export default SignIn
