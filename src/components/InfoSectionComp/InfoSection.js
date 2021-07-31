import React from 'react'
import { useStateValue } from '../../context/StateContext';
import { calculatePrice } from '../../PricingPlan';
import { Button, ButtonNavigate } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2,
ImgWrap, Img} from './InfoSectionElements';


const InfoSection = ({lightBg, name, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, isButtonScroll, linkTo, item}) => {
    
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {

        // console.log('Hello from Info Section, item > ', item);
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
                planDurationBaby: item.planDurationBaby,
                breakFastRequired: item.breakFastRequired,
                lunchRequired: item.lunchRequired,
                dinnerRequired: item.dinnerRequired,
                paused: item.paused,
            }
        })

        calculatePrice(item, dispatch);
    }
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={name}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    {isButtonScroll && <Button to = {linkTo} 
                                        smooth='true'
                                        duration={500}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                            {buttonLabel}
                                    </Button>}
                                   
                                    {!isButtonScroll && item && <ButtonNavigate 
                                        onClick = {addToBasket}
                                        to = {linkTo} 
                                        smooth='true'
                                        duration={500}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                            {buttonLabel}
                                    </ButtonNavigate>}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}  initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
