import React from 'react';
import {FaBars} from 'react-icons/fa';
import {} from 'react-scroll';

import { Nav,
         NavbarContainer, 
         NavLogo, 
         NavItem, 
         NavLinks, 
         NavMenu, 
         MobileIcon, 
         NavBtn, 
         NavBtnLink } from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Healthy<span style={{color: '#01bf71'}}>Book</span>ar</NavLogo>
                    <MobileIcon onClick={toggle}>
                            <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signuo'>SignUp</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
