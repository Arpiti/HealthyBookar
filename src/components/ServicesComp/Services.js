import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ServicesTopLine, ServicesCardWrap } from './ServicesElements';
import { useStateValue } from '../../context/StateContext';

function Services({ servicesData }) {

    const [state, dispatch] = useStateValue();

   function addToBasket(item) {

       // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: item.id,
                type: item.type,
                subject: item.subject,
                deliveryDone: item.deliveryDone,
                eatPreference: item.eatPreference,
                planDurationMother: item.planDurationMother,
                planDurationNewBorn: item.planDurationNewBorn,
                breakFastRequired: item.breakFastRequired,
                lunchRequired: item.lunchRequired,
                dinnerRequired: item.dinnerRequired,
                price: item.price,
                paused: item.paused,
            }
        })
    }

    return (
        <ServicesContainer id="services">
            <ServicesTopLine>{servicesData.topLine}</ServicesTopLine>
            <ServicesH1>{servicesData.mainHeading}</ServicesH1>
            <ServicesWrapper>

                <ServicesCardWrap onClick={() => addToBasket(servicesData.item1)} to={servicesData.cardLink1}>
                    <ServicesCard>
                        <ServicesIcon src={servicesData.cardIcon1} />
                        <ServicesH2>{servicesData.cardHeading1}</ServicesH2>
                        <ServicesP> {servicesData.cardInfo1}</ServicesP>
                    </ServicesCard>
                </ServicesCardWrap>

                <ServicesCardWrap onClick={() => addToBasket(servicesData.item2)} to={servicesData.cardLink2}>
                    <ServicesCard>
                        <ServicesIcon src={servicesData.cardIcon2} />
                        <ServicesH2>{servicesData.cardHeading2}</ServicesH2>
                        <ServicesP> {servicesData.cardInfo2}</ServicesP>
                    </ServicesCard>
                </ServicesCardWrap>

                <ServicesCardWrap onClick={() => addToBasket(servicesData.item3)} to={servicesData.cardLink3}>
                    <ServicesCard>
                        <ServicesIcon src={servicesData.cardIcon3} />
                        <ServicesH2>{servicesData.cardHeading3}</ServicesH2>
                        <ServicesP> {servicesData.cardInfo3}</ServicesP>
                    </ServicesCard>
                </ServicesCardWrap>
                
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
