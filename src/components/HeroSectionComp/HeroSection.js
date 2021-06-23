import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/videoBgPlay.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSectionElements'

function HeroSection() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='vide/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1> Nutritious Food Made Easy</HeroH1>
                    <HeroP> SignUp for a new account today and receive Rs 250/- off on your first subscription. </HeroP>
                    <HeroBtnWrapper>
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
