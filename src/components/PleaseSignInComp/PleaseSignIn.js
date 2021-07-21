import React from 'react'
import ORDER_CONFIRMED_IMAGE_URL from '../../images/order_confirmed.svg';
import { ButtonNavigate } from '../ButtonElements';

import { Container, Heading, SignInContainer, Img, ImgWrap } from './PleaseSignInElements';

const PleaseSignIn = () => {
    return (
        <>
            <Container>
                <ImgWrap>
                    <Img src={ORDER_CONFIRMED_IMAGE_URL} alt="Order_Confirmed_Image" />
                </ImgWrap>
                <SignInContainer>
                    <Heading>Please sign up/in to subscribe</Heading>
                    <ButtonNavigate to='/signin'>Sign In/Up</ButtonNavigate>
                </SignInContainer>
            </Container>
        </>
    )
}

export default PleaseSignIn
