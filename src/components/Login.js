import React, { useState } from 'react';
import '../Login.css';
import {db, auth} from '../firebase/config';
import { useHistory } from 'react-router';

const logo_url = "https://www.nwahomepage.com/wp-content/uploads/sites/90/2021/01/Amazon-logo.png";



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleOnEmailChange = (e) => {
        console.log("Setting email");
        setEmail(e.target.value);
    }

    const handleOnPasswordChange = (e) => {
        console.log("Setting password");
        setPassword(e.target.value);
    }

    const handleSubmitOnClick = (e) => {
        console.log("Submit button clicked");
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                console.log('Sign in success');
                if(auth)
                {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));

    }

    const handleRegisterOnClick = (e) => {
        console.log("Register button clicked");
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                console.log('Created new user');
                if(auth)
                {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className="login__container">
            <img className="login__logo" src={logo_url} alt="" />
            <div className="login__details">
                <form>
                    <h2>Sign-in</h2>
                    <div className="login__email">
                        <div className="login__leftAlign">
                            <small><strong>Email</strong></small>
                        </div>
                        <input type="email" className="login__input" placeholder="Email" value={email} onChange={handleOnEmailChange}/>
                    </div>
                    <div className="login__password">
                        <div className="login__leftAlign">
                            <small><strong>Password</strong></small>
                        </div>
                        <input type="password" className="login__input" placeholder="Password" value={password} onChange={handleOnPasswordChange}/>
                    </div>
                    <button id="signInButton" className="login__button" onClick={handleSubmitOnClick}>Sign In</button>
                    <p className="login__leftAlign"><small>By continuing, you agree to Amazon's condition of Use and Privacy Notice. Also please allow the website to store cookies on your system.</small></p>
                    <button id="createAccountButton" className="login__button" onClick={handleRegisterOnClick}>Create your account</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
