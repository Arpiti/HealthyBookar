import { Search, ShoppingCart } from '@material-ui/icons';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/StateContext';
import { auth } from '../firebase/config';
import '../Header.css';

const logo_url = "./assets/logo4.png";

const Header = () => {

    const [{ basket, user }, dispatcher] = useContext(StateContext);

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <nav className="header__content">

                <Link to="/">
                    <div className="header__logoContainer">
                        {/* <img className="header_logo" src={logo_url} alt="logo" /> */}
                        <div className="header__logo">Healthy Bookar</div>
                    </div>
                </Link>

                <ul className="header__navbarList">

                    <li>
                        <a className="header_navTab" href="#home__sectionId1">
                            <span className="header__navItem">About</span>
                        </a>
                    </li>

                    <li>
                        <a className="header_navTab" href="#home__sectionId3">
                            <span className="header__navItem">Faqs</span>
                        </a>
                    </li>

                    <li>
                        <a className="header_navTab" href="#home__sectionId5">
                            <span className="header__navItem">Contact Us</span>
                        </a>
                    </li>

                    <li>
                        <a className="header_navTab" href="#home__sectionId7">
                            <span id="header__signIn" className="header__navItem">Sign Up/In</span>
                        </a>
                    </li>


                    {/* <li>
                        <Link to={!user && '/login'}>
                            <div className="header_username" onClick={handleAuthentication}>
                                <p className="header_firstLine">{user ? `Hi ${user.email}` : "Hi Guest"}</p>
                                <span className="header_secondLine">{user ? "Sign Out" : "Sign in"}</span>
                            </div>
                        </Link>
                    </li> */}

                    {/* <li>
                        <Link to="/checkout">
                            <div className="header_cart">
                                <MenuIcon className="header__cartIcon" />
                                <span className="header_secondLine">{basket?.length}</span>
                            </div>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
