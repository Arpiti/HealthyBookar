import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useStateValue } from '../../context/StateContext';
import { auth, db } from '../../firebase/config';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavItem,
    NavLinks,
    NavMenu,
    MobileIcon,
    NavBtn,
    NavBtnLink,
    NavLinkRoute,
    NavProfile,
    NavBtnContainer,
    NavOrderContainer,
    NavOrder,
    NavOrderQuantity,
} from './NavbarElements'


const Navbar = ({ toggle }) => {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orderQuantity, setOrderQuantity] = React.useState(0);

    React.useEffect(() => {

        console.log('In Navar useEffect');
        const unsub = db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .get()
            .then(snap => {
                //console.log('Size from Navbar 1> ', snap.size);
                setOrderQuantity(snap.size);
            })
            .catch(error => console.error(error.message));

          //  console.log('Size from Navbar > ', orderQuantity);
        
    }, [user]);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinkRoute to="/faq"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}>FAQs</NavLinkRoute>
                        </NavItem>

                    </NavMenu>

                    <NavOrderContainer to="/order">
                        <NavOrder>Orders</NavOrder>
                        <FastfoodSharpIcon style={{ color: 'white', marginLeft: '.5rem' }} />
                        <NavOrderQuantity>{orderQuantity}</NavOrderQuantity>
                    </NavOrderContainer>

                    <NavBtnContainer>
                        {user && <NavProfile><em>Hi {user.displayName}</em></NavProfile>}
                        <NavBtn onClick={handleAuthentication}>
                            {user ?

                                <NavBtnLink
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Sign Out</NavBtnLink>
                                :
                                <NavBtnLink to="/signin"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Sign In</NavBtnLink>

                            }
                        </NavBtn>
                    </NavBtnContainer>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
