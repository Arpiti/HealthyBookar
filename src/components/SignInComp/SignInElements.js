import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImg from '../../images/about.svg';

export const Container = styled.div`
    min-height: 560px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-image: url(${bgImg});
    background-size: cover;
    background-attachment: fixed;
    background-position: right; 
    
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 70%;
    }
`;

export const Icon = styled(Link)`
    text-align: center;
    margin-bottom: 2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
;`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: black;
    opacity: 0.80;
    max-width: 500px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 2rem 2rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
        margin-bottom: 2rem;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInout = styled.input`
    padding: 12px 12px;
    margin-bottom: 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #fff;
`;

export const FormButtonSubmit = styled.button`
    border-radius: 50px;
    background: #01bf71;
    padding: 6px 0;
    color: #010606;
    font-size: 18px;
    font-weight: 550;
    border: none;
    cursor: pointer;
   
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
    }

    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
`;

export const FormButtonFacebookSignIn = styled.button`
    background: #4966bc;
    border-radius: 50px;
    margin-top: 1.5rem;
    padding: 6px 0;
    border: none;
    font-size: 16px;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
    }
`;

export const FormButtonGoogleSignIn = styled.button`
    background: #dd4c3a;
    margin-top: 2rem;
    padding: 6px 0;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
    }
`;

export const FormButtonSignUp = styled(Link)`
    background: lightgrey;
    color: black;
    margin-top: 24px;
    padding: 6px 0;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
`;

export const FormLinkText = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
`;