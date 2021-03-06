
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase/config';
import { useContext, useEffect } from 'react';
import { StateContext } from './context/StateContext';
import SignInPage from './pages/SignInPage';
import FaqPage from './pages/FaqPage';
import SubscribePage from './pages/CreateSubscription';
import ForgotPasswordPage from './pages/ForgotPassword';
import SignUpPage from './components/SignInComp/SignUp';
import OrderPage from './pages/OrderPage';
import PaymentConfirmPage from './pages/PaymentConfirm';



function App() {

  const [{ userNameEntered }, dispatch] = useContext(StateContext);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      //console.log('Username entered is >>>', userNameEntered);

      if (authUser) {
        //User is logged in

        // adding username to the authuser Displayname if the account is created using Forms with Name out of Name column
        if (authUser.displayName === null || authUser.displayName === 'undefined') {

          //console.log('authUser display namusere is null >>', authUser.displayName);
          authUser.updateProfile({
            displayName: `${userNameEntered}`,
          }).then(() => {
            // Update successful
            //console.log('User after update is >>>', authUser.displayName);
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
        }
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //logged Out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/signin" component={SignInPage} exact />
          <Route path="/faq" component={FaqPage} exact />
          <Route path="/subscribe" component={SubscribePage} exact />
          <Route path="/forgotPassword" component={ForgotPasswordPage} exact />
          <Route path="/signup" component={SignUpPage} exact />
          <Route path="/order" component={OrderPage} exact />
          <Route path="/paymentConfirm" component={PaymentConfirmPage} exact />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
