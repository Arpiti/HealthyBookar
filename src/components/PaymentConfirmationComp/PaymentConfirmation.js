import React from 'react';
import PAYMENT_CONFIRMED_IMAGE_URL from '../../images/paymentConfirmation.svg';
import { useHistory } from 'react-router-dom';

import { Container, Heading, Img, ImgWrap } from './PaymentConfirmationElements';



function PaymentConfirmation() {

    //onLoad={() => setTimeout(() => history.replace('/order'), 3000)}
    const history = useHistory();

    return (
        <div>
            <Container>
                <Heading initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}>Order placed successfully</Heading>
                <ImgWrap>
                    <Img  src={PAYMENT_CONFIRMED_IMAGE_URL} alt="Payment_Confirmed_Image" initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }} 
                                onLoad={() => setTimeout(() => history.replace('/order'), 3000)}/>
                </ImgWrap>
            </Container>
        </div>
    )
}

export default PaymentConfirmation
