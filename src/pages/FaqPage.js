import React from 'react'
import Accordian from '../components/AccordianComp/Accordian'
import Footer from '../components/FooterComp/Footer'
import ScrollToTop from '../components/ScrollToTop'
import NavbarLogo from '../components/NavbarComp/NavbarLogo';


const FaqPage = () => {
    return (
        <>
          <ScrollToTop />
          <NavbarLogo />
          <Accordian />  
          <Footer />
        </>
    )
}

export default FaqPage

