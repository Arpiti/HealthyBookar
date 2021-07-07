import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogoOnly
} from './NavbarElements'


const NavbarLogo = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoOnly to="/" onClick={toggleHome}>Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</NavLogoOnly>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavbarLogo
