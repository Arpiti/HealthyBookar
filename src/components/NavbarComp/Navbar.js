import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useStateValue } from '../../context/StateContext';
import { auth } from '../../firebase/config';

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
    NavBtnContainer
} from './NavbarElements'


const Navbar = ({ toggle }) => {

    const [{ basket, user }, dispatch] = useStateValue();

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const handleAuthentication = () => {
        if(user){
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
                    <NavBtnContainer>
                    { user && <NavProfile><em>Hi {user.displayName}</em></NavProfile>}
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
