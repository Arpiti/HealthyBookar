import React, {useState} from 'react'
import Sidebar from '../components/SidebarComp/Sidebar'
import Navbar from '../components/NavbarComp/Navbar'
import HeroSection from '../components/HeroSectionComp/HeroSection';
import InfoSection from '../components/InfoSectionComp/InfoSection';
import { homeObjOne } from '../components/InfoSectionComp/Data';

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
            <InfoSection {...homeObjOne} />
        </div>
    )
}

export default Home
