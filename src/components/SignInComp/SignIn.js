import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInout, FormLabel, FormWrap, Icon, Text } from './SignInElements'

const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <FormContent>
                      <Form action="#">
                          <Icon to="/">Healthy<span style={{color: '#01bf71'}}>Book</span>ar</Icon>
                          <FormH1>Sign in to your account</FormH1>
                          <FormLabel htmlFor="for">Email</FormLabel>
                          <FormInout type="email" required />
                          <FormLabel htmlFor="for">Password</FormLabel>
                          <FormInout type="password" required />
                          <FormButton type="submit"> Continue</FormButton>
                          <Text> Forgot password </Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>

        </>
    )
}

export default SignIn
