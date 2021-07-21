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

export const OrderWrap = styled.div`

    width: 480px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    max-height: 100%;

    position: absolute;
    top: 0;
    left: ${({ index }) => {
        const leftValue = index * 520;
        return leftValue + 'px';
    }
    };

    @media screen and (max-width: 480px) {
        padding: 2rem;
    }
`;

export const OrderHistoryContainer = styled.div`
    width: 500px;
    height: 520px;
    
    position: relative;

    z-index: 1;

    padding: 1rem 1rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    overflow-y: hidden;

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }

    //  &:hover {
    //      transform: scale(1.02);
    //      transition: all 0.2s ease-in-out;
    //      cursor: pointer;
    //  }
`;

export const OrderActiveHeading = styled.h1`
        margin-top: 1.5rem;
        padding: 1rem;
        color: black;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #01bf71;
`;

export const OrderExpiredHeading = styled.h1`
        margin-top: 1.5rem;
        padding: 1rem;
        color: black;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: red;
`;

export const PauseButtonContainer = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
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

export const PageH1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;

    &:hover {
      color: #01bf71;
     transition: .5s ease-out;
    }
`;

export const OrderSmallInfo = styled.small`
    text-align: center;
`;

export const OrderDate = styled.p`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
`;

export const OrderInfoDetail = styled.div`
    margin-top: 1rem;
    padding: 1rem;
`;


export const OrderInfo = styled.span`
    display: inline-block;
    min-width: 200px;
`;


export const OrderSignInContainer = styled.div`
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