import React from 'react'

import { Container, Form, FormContent, FormH1, FormWrap, Icon, Text } from './SignInElements'

const RedirectDialogBox = ({ redirectHeading, pageName, redirectTimeout }) => {

    const [countdown, setCountdown] = React.useState(redirectTimeout);

    React.useEffect(() => {
        let countdownInterval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            }
            else {
                clearInterval(countdownInterval);
            }
        }, 1000);
        return () => {
            clearInterval(countdownInterval);
        };
    })

    return (
        <>
          <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <Icon to="/">Healthy<span style={{ color: '#01bf71' }}>Book</span>ar</Icon>
                            <FormH1>{redirectHeading}</FormH1>
                            <Text>You'll be redirected to {pageName} in <span style={{ color: '#01bf71' }}>{countdown} </span>seconds</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default RedirectDialogBox
