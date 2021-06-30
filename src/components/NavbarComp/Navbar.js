import React from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

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
    NavLinkRoute
} from './NavbarElements'


const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
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
                    <NavBtn>
                        <NavBtnLink to="/signin"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
