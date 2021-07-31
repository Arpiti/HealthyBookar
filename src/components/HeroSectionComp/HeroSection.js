import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/videoBgPlay.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'

function HeroSection() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='vide/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1> Healthy Mother = Healthy Baby</HeroH1>
                    <HeroP> Eat healthy Nutritious food during the pregnancy, it helps for baby growth in the womb.
                        Thinking will not make you healthy. Eating Healthy Bookar food make you healthy.</HeroP>
                    <HeroBtnWrapper>
                        <Button to='services'
                            smooth='true'
                            duration={500}
                            exact='true'
                            offset={-80}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
