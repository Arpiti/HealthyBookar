import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
   
    @media screen and (max-width: 960px) {
        padding: 32px 32px;
        flex-direction: column;
        align-items: center;
    }

`;

export const Heading = styled.h1`
        margin-top: 1.5rem;
        padding: 1rem;
        color: black;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: red;
`;

export const ImgWrap = styled.div`
    max-width: 550px;
    padding: 3rem;
    margin-right: 2rem;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;


export const SignInContainer = styled.div`
    width: 350px;
    height: 100%;
    
    position: relative;

    z-index: 1;

    padding: 1rem 1rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    
    align-self: center;

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }

    //  &:hover {
    //      transform: scale(1.02);
    //      transition: all 0.2s ease-in-out;
    //      cursor: pointer;
    //  }
`;