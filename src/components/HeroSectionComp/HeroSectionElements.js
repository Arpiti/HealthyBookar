import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`;


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    background-color: rgba(1, 191, 30, 0.3);
    border-radius: 1rem;
    padding: 1rem;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: black;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;


