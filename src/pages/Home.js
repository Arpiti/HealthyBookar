import React, {useState} from 'react'
import Sidebar from '../components/SidebarComp/Sidebar'
import Navbar from '../components/NavbarComp/Navbar'
import HeroSection from '../components/HeroSectionComp/HeroSection';
import InfoSection from '../components/InfoSectionComp/InfoSection';
import { homeObj1, homeObj2, homeObj3, homeObj4 } from '../components/InfoSectionComp/Data';
import Services from '../components/ServicesComp/Services';
import Footer from '../components/FooterComp/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObj1} />
            <InfoSection {...homeObj2} />
            <Services />
            <InfoSection {...homeObj3} />
            <InfoSection {...homeObj4} />
            <Footer />
        </div>
    )
}

export default Home
