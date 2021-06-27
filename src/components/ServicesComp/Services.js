import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesTopLine } from './ServicesElements';
import Icon1 from '../../images/3_month_image.png';
import Icon2 from '../../images/6_month_image.png';
import Icon3 from '../../images/baby.png';


function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesTopLine>Our Offerings</ServicesTopLine>
            <ServicesH1>Food Subscriptions</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>3 months</ServicesH2>
                    <ServicesP> Nutriotious food for <strong>mothers</strong> to keep them healthy and strong in their motherhood.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>6 months</ServicesH2>
                    <ServicesP> Nutriotious food for <strong>mothers</strong> to keep them healthy and strong in their motherhood.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Baby Food</ServicesH2>
                    <ServicesP> Nutriotious food for <strong>babies</strong> to help them build the immunity and be fit like their parents.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
