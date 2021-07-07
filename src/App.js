
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase/config';
import { useContext, useEffect } from 'react';
import { StateContext } from './context/StateContext';
import Payment from './components/Payment';
import SignIn from './pages/SignInPage';
import FaqPage from './pages/FaqPage';
import SubscribePage from './pages/CreateSubscription';

function App() {

  const [{}, dispatch] = useContext(StateContext);

  useEffect(() => {
    console.log('In useeffect >>>>>>');

    auth.onAuthStateChanged(authUser => {
      console.log('User is >>>', authUser);

      if(authUser){
        //User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
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
        {/* <Route path="/login">
            <Login/> 
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route> */}
          <Route path="/" exact>
            <Home />
            {/* <Header />
            <Home /> */}
          </Route>
          
          <Route path="/signin" component={SignIn} exact />
          <Route path="/faq" component={FaqPage} exact />
          <Route path="/subscribe" component={SubscribePage} exact />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
