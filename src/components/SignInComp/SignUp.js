import React, { useState } from 'react'
import { auth, fbProvider, googleProvider } from '../../firebase/config';

import { useHistory } from 'react-router';
import { Container, Form, FormButtonSubmit, FormContent, FormH1, FormInout, FormLabel, FormWrap, Icon, Text, FormButtonFacebookSignIn, FormButtonGoogleSignIn } from './SignInElements'
import { StateContext } from '../../context/StateContext';

export const SignUp = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{ }, dispatch] = React.useContext(StateContext);


    const registerNewAccount = e => {
        e.preventDefault();


        //Firebase registration
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                //  console.log(auth)
                //var user = userCredential.user;
                if (userCredential) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

        console.log('name entered is >>', name);

        dispatch({
            type: "SET_USER_NAME",
            userNameEntered: name
        })
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


    return (
        <>
            <Container>
                <FormWrap>

                    <FormContent>
                        <Form action="#">
                            <Icon to="/">Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</Icon>
                            <FormH1>Create new account</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInout type="text" required value={name} onChange={e => setName(e.target.value)} />
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInout type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInout type="password" requiredvalue={password} onChange={e => setPassword(e.target.value)} />
                            <FormButtonSubmit disabled={!name || !email || !password} type="submit" onClick={registerNewAccount}> Register </FormButtonSubmit>
                            <Text> ----------- OR ----------- </Text>
                            <FormButtonGoogleSignIn onClick={registerWithGoogle} type="submit">Sign up with Google</FormButtonGoogleSignIn>
                            <FormButtonFacebookSignIn onClick={registerWithFacebook} type="submit">Sign up with Facebook</FormButtonFacebookSignIn>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    )
}

export default SignUp
