import React from 'react'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg';


function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Reduce Expenses</ServicesH2>
                    <ServicesP> We help reduce your fees by almost 20%.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Online Anytime</ServicesH2>
                    <ServicesP> We help reduce your fees by almost 20%.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Zero fees</ServicesH2>
                    <ServicesP> We help reduce your fees by almost 20%.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
